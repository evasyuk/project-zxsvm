import en from './en.json'
import ua from './ua.json'
import ru from './ru.json'

import { flattenMessages } from '../../helpers/flattenMessages'

const allPossibleDictionaries = [
  flattenMessages(ua),
  flattenMessages(en),
  flattenMessages(ru),
]
const availableLangOptions = allPossibleDictionaries.map((dict) => ({
  lang_key: dict.lang_key,
  lang_label: dict.lang_label,
}))

export { allPossibleDictionaries, availableLangOptions }
