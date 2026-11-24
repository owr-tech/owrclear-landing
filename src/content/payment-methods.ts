/**
 * Payment methods advertised on the pricing section.
 *
 * To support another country, add one entry to `paymentMethodsByCountry` with a
 * unique ISO country code, its name, and the methods available there. The
 * pricing section renders every entry automatically — no component changes.
 *
 * Example:
 *   {
 *     code: 'SN',
 *     name: 'Sénégal',
 *     methods: [
 *       { id: 'wave', label: 'Wave', kind: 'mobile-money', logo: '/payment-methods/wave.png' },
 *       { id: 'orange-money', label: 'Orange Money', kind: 'mobile-money', logo: '/payment-methods/orange-money.svg' },
 *     ],
 *   },
 *
 * `kind: 'card'` methods without a logo fall back to a generic bank-card icon.
 */

export type PaymentMethodKind = 'mobile-money' | 'card'

export type PaymentMethod = {
  id: string
  label: string
  kind: PaymentMethodKind
  logo?: string
}

export type CountryPaymentMethods = {
  code: string
  name: string
  methods: PaymentMethod[]
}

export const paymentMethodsByCountry: CountryPaymentMethods[] = [
  {
    code: 'TG',
    name: 'Togo',
    methods: [
      {
        id: 'mixx-by-yas',
        label: 'Mixx by Yas',
        kind: 'mobile-money',
        logo: '/payment-methods/mixx-by-yas.png',
      },
      {
        id: 'moov-money-flooz',
        label: 'Moov Money Flooz',
        kind: 'mobile-money',
        logo: '/payment-methods/moov-money-flooz.png',
      },
      { id: 'bank-card', label: 'Carte bancaire', kind: 'card' },
    ],
  },
  {
    code: 'CI',
    name: "Côte d'Ivoire",
    methods: [
      { id: 'wave', label: 'Wave', kind: 'mobile-money', logo: '/payment-methods/wave.png' },
      {
        id: 'orange-money',
        label: 'Orange Money',
        kind: 'mobile-money',
        logo: '/payment-methods/orange-money.svg',
      },
      {
        id: 'mtn-momo',
        label: 'MTN MoMo',
        kind: 'mobile-money',
        logo: '/payment-methods/mtn-momo.png',
      },
      {
        id: 'moov-money',
        label: 'Moov Money',
        kind: 'mobile-money',
        logo: '/payment-methods/moov-money-flooz.png',
      },
      { id: 'bank-card', label: 'Carte bancaire', kind: 'card' },
    ],
  },
  {
    code: 'CD',
    name: 'République Démocratique du Congo',
    methods: [
      {
        id: 'airtel-money',
        label: 'Airtel Money',
        kind: 'mobile-money',
        logo: '/payment-methods/airtel-money.png',
      },
      {
        id: 'orange-money',
        label: 'Orange Money',
        kind: 'mobile-money',
        logo: '/payment-methods/orange-money.svg',
      },
      {
        id: 'mpesa',
        label: 'M-PESA',
        kind: 'mobile-money',
        logo: '/payment-methods/mpesa.png',
      },
      { id: 'wave', label: 'Wave', kind: 'mobile-money', logo: '/payment-methods/wave.png' },
    ],
  },
]

export function getPaymentMethods(countryCode: string): CountryPaymentMethods | undefined {
  return paymentMethodsByCountry.find((country) => country.code === countryCode)
}
