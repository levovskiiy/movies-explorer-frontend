interface BemConfigType {
  elDelimeter: string
  modDelimeter: string
}

type modAddHandler = (mod: string, modVal: string) => string

const bemConfig: BemConfigType = {
  elDelimeter: '__',
  modDelimeter: '_'
}

export function blockModificators (
  block: string,
  modificator: string,
  value: string): string {
  let namespace = ''

  if (value === '' || typeof value === 'undefined') {
    return ''
  }

  namespace += block + bemConfig.modDelimeter + modificator + bemConfig.modDelimeter + value + ' '

  return namespace.trim() ?? ''
}

export function configClasses (namespace: string): [string, modAddHandler] {
  function mod (mod: string, modVal: string) {
    if (mod === '' || typeof mod === 'undefined') {
      return ''
    }

    return blockModificators(namespace, mod, modVal) ?? ''
  }

  return [namespace, mod]
}

export function classess (...cls: string[]): string {
  return cls.join(' ').trim() ?? ''
}
