import { OTLPLogExporter } from '@opentelemetry/exporter-logs-otlp-http'
import { resourceFromAttributes } from '@opentelemetry/resources'
import { BatchLogRecordProcessor, LoggerProvider } from '@opentelemetry/sdk-logs'

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST
const isNodeRuntime = process.env.NEXT_RUNTIME === 'nodejs'

function warnMissingConfiguration(variableName: string) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(
      `${variableName} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${variableName} is configured`,
    )
  }
}

if (isNodeRuntime && !token) {
  warnMissingConfiguration('NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN')
}

if (isNodeRuntime && !host) {
  warnMissingConfiguration('NEXT_PUBLIC_POSTHOG_HOST')
}

export const posthogLogProvider =
  isNodeRuntime && token && host
    ? new LoggerProvider({
        resource: resourceFromAttributes({ 'service.name': 'owrclear-landing' }),
        processors: [
          new BatchLogRecordProcessor({
            exporter: new OTLPLogExporter({
              url: `${host.replace(/\/$/, '')}/i/v1/logs`,
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            }),
          }),
        ],
      })
    : null

export function register() {}
