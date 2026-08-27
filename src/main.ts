import { ConfigWrapper } from './ui/Config'

plugin.onConfig(() => {
  const element = document.createElement('div')
  ReactDOM.render(ConfigWrapper(), element)
  return element
})

plugin.onLoad(() => {})
