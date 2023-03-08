export type Modificators = Record<string, string | boolean | undefined>
export type Mixins = Array<string | undefined>
export type BemFormatter = (block: string, blockMods?: Modificators, mixins?: Mixins) => Bem

export type Bem = {
  block: string
  element: (elementName: string, elementMods?: Modificators, mixins?: Mixins) => string
}

type Preset = {
  namepsace?: string
  elementDelimeter?: string
  modDelimeter?: string
}

function addMods(blockName: string, mods: Modificators, preset: Preset): string[] {
  const resultMods = []

  const modPrefix = blockName + preset.modDelimeter

  for (const [key, value] of Object.entries(mods)) {
    const modName = key
    const modValue = value

    if (modValue === true) {
      resultMods.push(modPrefix + modName)
    }

    if (modValue && typeof modValue !== 'boolean') {
      resultMods.push(modPrefix + modName + preset.modDelimeter + modValue)
    }
  }

  return resultMods
}

function bem(preset: Preset): BemFormatter {
  function toString(block: string, el?: string, mods?: Modificators | null, mixins?: Mixins) {
    const name = el ? block + preset.elementDelimeter + el : block
    const classnames: string[] = [name]

    if (mods) {
      classnames.push(...addMods(name, mods, preset))
    }

    if (mixins) {
      for (const mix of mixins) {
        if (mix && typeof mix?.valueOf() === 'string') {
          classnames.push(mix)
        }
      }
    }

    return classnames.length === 1 ? name : classnames.join(' ')
  }

  return function generator(block: string, blockMods?: Modificators, mixins?: Mixins): Bem {
    return {
      get block() {
        return toString(block, undefined, blockMods, mixins)
      },

      element(elementName: string, elementMods?: Modificators, mixins?: Mixins) {
        return toString(block, elementName, elementMods, mixins)
      }
    }
  }
}

export default bem
