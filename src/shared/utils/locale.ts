import type { SupportedLocale, LocaleValue } from '../types/locale';

function unwrapLocalValue<VT = string>(data: LocaleValue<VT>, locale: SupportedLocale): VT {
  return data[locale] || data.en;
}

export { unwrapLocalValue };
