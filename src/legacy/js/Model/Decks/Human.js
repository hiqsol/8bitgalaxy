// powers: a, c, p, s
// available unique combinations:
// a-c, a-p, a-s, c-p, c-s, p-s
// c-a, p-a, s-a, p-c, s-c, s-p
// available unique pairs: ac+ps, ap+cs, as+cp

class Human {

  static cards() {
    return {
      'Human-Ship-2a': {
        'specs':      'l2a,a1s,p1a,c1a:retreat',
        'altspecs':   'l1s,e2p,p1s,c1s',
      },
      'Human-Ship-2c': {
        'specs':      'l2c,e1p,p1c,c1c:trade',
        'altspecs':   'l1a,e2p,p1a,c1a',
      },
      'Human-Ship-2p': {
        'specs':      'l2p,e1p,p1p,c1p:extract',
        'altspecs':   'l1c,e2p,p1c,c1c',
      },
      'Human-Ship-2s': {
        'specs':      'l2s,e1p,p1s,c1s:explore',
        'altspecs':   'l1p,e2p,p1p,c1p',
      },


      'Human-Ship-4a': {
        'specs':      'l4a,e1p,r2a,r1c,p2a,c1a:smuggle',
        'altspecs':   'l3c,e2p,r1c,r2a,p2c,c1c',
      },
      'Human-Ship-4c': {
        'specs':      'l4c,e1p,r2c,r1a,p2c,c1c:improve',
        'altspecs':   'l3a,e2p,r1a,r2c,p2a,c1a',
      },
      'Human-Ship-4p': {
        'specs':      'l4p,e1p,r2p,r1s,p2p,c1p:upgrade',
        'altspecs':   'l3s,e2p,r1s,r2p,p2s,c1s',
      },
      'Human-Ship-4s': {
        'specs':      'l4s,e1p,r2s,r1p,p2s,c1s:exhaust',
        'altspecs':   'l3p,e2p,r1p,r2s,p2p,c1p',
      },


      'Human-Hero-1a': {
        'specs':      'l1a,e1c,p1a,c1a:recon',
        'altspecs':   'l1c,e1c,p1c,c1c:improve',
      },
      'Human-Hero-1p': {
        'specs':      'l1p,e1c,p1p,c1p:fix',
        'altspecs':   'l1s,e1c,p1s,c1s:recycle',
      },
      'Human-Hero-2a': {
        'specs':      'l2a,e1c,p2a,c2a:recon',
        'altspecs':   'l2s,e1c,p2s,c2s:recycle',
      },
      'Human-Hero-2c': {
        'specs':      'l2c,e1c,p2c,c2c:heal',
        'altspecs':   'l2p,e1c,p2p,c2p:upgrade',
      },
      'Human-Hero-3a': {
        'specs':      'l3a,e1c,r1a,r1p,p2a,c3a:stealth',
        'altspecs':   'l3p,e1c,r1p,r1a,p2p,c3p:upgrade',
      },
      'Human-Hero-3c': {
        'specs':      'l3c,e1c,r1c,r1s,p2c,c3c:improve',
        'altspecs':   'l3s,e1c,r1s,r1c,p2s,c3s:navi',
      },
      'Human-Hero-4a': {
        'specs':      'l4a,e1c,r2a,r2p,p3a,c4a:stealth',
        'altspecs':   'l4p,e1c,r2p,r2a,p3p,c4p:fix+upg',
      },
      'Human-Hero-4c': {
        'specs':      'l4c,e1c,r2c,r2s,p3c,c4c:heal+imp',
        'altspecs':   'l4s,e1c,r2s,r2c,p3s,c4s:navi',
      },



      'Human-Base-2a': {
        'specs':      'l2a,e1p,c1a,p2a:mobilz',
        'altspecs':   'l1a,e1p,p1a:mobilz',
      },
      'Human-Base-2c': {
        'specs':      'l2c,e1p,c1c,p2c:trade',
        'altspecs':   'l1c,e1p,p1c:trade',
      },
      'Human-Base-2p': {
        'specs':      'l2p,e1p,c1p,p2p:shpyrd',
        'altspecs':   'l1p,e1p,p1p:shpyrd',
      },
      'Human-Base-2s': {
        'specs':      'l2s,e1p,c1s,p2s:recycle',
        'altspecs':   'l1s,e1p,p1s:recycle',
      },


      'Human-Base-4a': {
        'specs':      'l4a,e1p,r2a,c3a,p4a:stealth',
        'altspecs':   'l3a,e1p,r2a,p3n:stealth',
      },
      'Human-Base-4c': {
        'specs':      'l4c,e1p,r2c,c3c,p4c:heal+acad',
        'altspecs':   'l3c,e1p,r2c,p3c:heal+acad',
      },
      'Human-Base-4p': {
        'specs':      'l4p,e1p,r2p,c3p,p4p:+++load',
        'altspecs':   'l3p,e1p,r2p,p3p:+load',
      },
      'Human-Base-4s': {
        'specs':      'l4s,e1p,r2s,c3s,p4s:navi',
        'altspecs':   'l3s,e1p,r2s,p3s:navi',
      },


      'Human-Colony-2a': {
        'specs':      'l2a,e1c,c2a,p2a:recon',
        'altspecs':   'l1a,e1c,p1a:recon',
      },
      'Human-Colony-2c': {
        'specs':      'l2c,e1c,c2c,p2c:academy',
        'altspecs':   'l1c,e1c,p1c:academy',
      },
      'Human-Colony-2p': {
        'specs':      'l2p,e1c,c2p,p2p:extract',
        'altspecs':   'l1p,e1c,p1p:extract',
      },
      'Human-Colony-2s': {
        'specs':      'l2s,e1c,c2s,p2s:explore',
        'altspecs':   'l1s,e1c,p1s:explore',
      },

      'Human-Colony-4a': {
        'specs':      'l4a,e1c,r2a,c3a,p4a:mobilz',
        'altspecs':   'l3a,e1c,r2a,p1a:mobilz',
      },
      'Human-Colony-4c': {
        'specs':      'l4c,e1c,r2c,c3c,p4c:export',
        'altspecs':   'l3c,e1c,r2c,p1c:export',
      },
      'Human-Colony-4p': {
        'specs':      'l4p,e1c,r2p,c3p,p4p:fix+shipy',
        'altspecs':   'l3p,e1c,r2p,p1p:fix+shipy',
      },
      'Human-Colony-4s': {
        'specs':      'l4s,e1c,r2s,c3s,p4s:+++range',
        'altspecs':   'l3s,e1c,r2s,p1s:+range',
      },

    }
  }
}

export default Human;
