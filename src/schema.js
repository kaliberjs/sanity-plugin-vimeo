import { FaFilm } from 'react-icons/fa'

export function vimeoType(overrides = {}) {
  return vimeo('vimeo', overrides)
}

export function vimeo(fieldName, overrides = {}) {
  return {
    name: fieldName,
    type: 'object',
    title: 'Video',
    icon: FaFilm,
    ...overrides,
    fields: [
      {
        name: 'quality1080',
        type: 'url',
      },
      {
        name: 'quality720',
        type: 'url',
      },
      {
        name: 'quality540',
        type: 'url',
      },
      {
        name: 'quality360',
        type: 'url',
      },
    ]
  }
}
