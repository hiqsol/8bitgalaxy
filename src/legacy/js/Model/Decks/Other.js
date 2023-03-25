class Other {

  static cards() {
    return {
      'Base':               { Type: 'Base', },
      'Hero':               { Type: 'Hero', },
      'Ship':               { Type: 'Ship', },
      'Colony':             { Type: 'Colony', },

      'Home':               { Type: 'Other' },
      'Tech':               { Type: 'Other' },
      'Event':              { Type: 'Other' },
      'Mission':            { Type: 'Other' },

      'None':               { Type: 'Other', Name: '' },
      'Attack':             { Type: 'Other' },
      'Colonization':       { Type: 'Other', Name: 'Colony' },
      'Production':         { Type: 'Other', Name: 'Prod' },
      'Science':            { Type: 'Other' },
      'Hand':               { Type: 'Other' },
      'Reserve':            { Type: 'Other' },
      'Discard':            { Type: 'Other' },
      'Scrap':              { Type: 'Other' },
      'Research':           { Type: 'Other', Name: 'Research' },
      'Ideas':              { Type: 'Other', Name: 'Ideas' },
    }
  }
}

export default Other;
