type BemMapModification = Record<string, string | boolean>
type classnameFn = (name: string, elementMods?: BemMapModification) => string

export type BemConfigurator = [string, classnameFn]

interface BemBlock {
  block: string
  modifiers?: BemMapModification
}

const BemSeparators = {
  e: '__',
  m: '_'
}

function makeBoolMod (template: string, mod: string): string {
  return template + BemSeparators.m + mod
}

function makeMapMod (template: string, modName: string, modVal: string): string {
  return template + BemSeparators.m + modName + BemSeparators.m + modVal
}

function isBoolMod (modVal: string | boolean): boolean {
  return typeof modVal === 'boolean' && modVal
}

function makeMod (template: string, mod: string, modVal: string | boolean): string {
  if (isBoolMod(modVal)) {
    return makeBoolMod(template, mod)
  }
  return makeMapMod(template, mod, modVal as string)
}

export function bem (blockOption: BemBlock): BemConfigurator {
  const {
    block,
    modifiers
  } = blockOption

  const init = () => {
    const classes = [block]

    if (modifiers !== undefined) {
      for (const [mod, modVal] of Object.entries(modifiers)) {
        classes.push(makeMod(block, mod, modVal))
      }
    }

    return classes.join(' ').trimEnd()
  }

  const classname = (name: string, elementMods?: BemMapModification): string => {
    const template = block + BemSeparators.e + name
    const classes = [template]

    if (elementMods !== undefined) {
      for (const [key, value] of Object.entries(elementMods)) {
        classes.push(makeMod(template, key, value))
      }
    }

    return classes.join(' ').trimEnd()
  }

  return [init(), classname]
}

export function classess (...styles: Array<string | undefined>) {
  return styles.join(' ').trimEnd() ?? ''
}

export function merge (first: string, second: string): string {
  return first + ' ' + second
}
