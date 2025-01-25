// powers: a, c, p, s
// available unique combinations:
// a-c, a-p, a-s, c-p, c-s, p-s
// c-a, p-a, s-a, p-c, s-c, s-p
class Human {

  static cards() {
    return {
      'Human-Ship-1a':      'a2a,p1a,c1a',
      'Human-Ship-1c':      'a2c,p1c,c1c',
      'Human-Ship-1p':      'a2p,p1p,c1p',
      'Human-Ship-1s':      'a2s,p1s,c1s',

      'Human-Ship-2a':      'a1s,p1a,c1a:retreat',
      'Human-Ship-2c':      'a1a,p1c,c1c:trade',
      'Human-Ship-2p':      'a1c,p1p,c1p:extract',
      'Human-Ship-2s':      'a1p,p1s,c1s:explore',

      'Human-Ship-3a':      'a4p,r1a,r2c,p2a,c1a',
      'Human-Ship-3c':      'a4a,r1c,r2a,p2c,c1c',
      'Human-Ship-3p':      'a4s,r1p,r2s,p2p,c1p',
      'Human-Ship-3s':      'a4c,r1s,r2p,p2s,c1s',

      'Human-Ship-4a':      'a3c,r2a,r1c,p2a,c1a:smuggle',
      'Human-Ship-4c':      'a3a,r2c,r1a,p2c,c1c:improve',
      'Human-Ship-4p':      'a3s,r2p,r1s,p2p,c1p:upgrade',
      'Human-Ship-4s':      'a3p,r2s,r1p,p2s,c1s:exhaust',

      'Human-Ship-5a':      'a6s,r3a,r3s,p3a,c2a',
      'Human-Ship-5c':      'a6p,r3c,r4p,p2c,c2c',
      'Human-Ship-5p':      'a6c,r3p,r3c,p3p,c2p',
      'Human-Ship-5s':      'a6a,r3s,r4a,p2s,c2s',

      'Human-Ship-6a':      'a5s,r4a,r3s,p3a,c2a',
      'Human-Ship-6c':      'a5p,r4c,r4p,p2c,c2c',
      'Human-Ship-6p':      'a5c,r4p,r3c,p3p,c2p',
      'Human-Ship-5s':      'a5a,r4s,r4a,p2s,c2s',


      'Human-Hero-1a':      'a1c,p1a,c1a:recon',
      'Human-Hero-1c':      'a1a,p1c,c1c:improve',
      'Human-Hero-1p':      'a1s,p1p,c1p:fix',
      'Human-Hero-1s':      'a1p,p1s,c1s:recycle',

      'Human-Hero-2a':      'a2s,p2a,c2a:recon',
      'Human-Hero-2c':      'a2p,p2c,c2c:heal',
      'Human-Hero-2p':      'a2c,p2p,c2p:upgrade',
      'Human-Hero-2s':      'a2a,p2s,c2s:recycle',

      'Human-Hero-3a':      'a3p,r1a,r1p,p2a,c3a:stealth',
      'Human-Hero-3c':      'a3s,r1c,r1s,p2c,c3c:improve',
      'Human-Hero-3p':      'a3a,r1p,r1a,p2p,c3p:upgrade',
      'Human-Hero-3s':      'a3c,r1s,r1c,p2s,c3s:navi',

      'Human-Hero-4a':      'a4p,r2a,r2p,p3a,c4a:stealth',
      'Human-Hero-4c':      'a4s,r2c,r2s,p3c,c4c:heal+imp',
      'Human-Hero-4p':      'a4a,r2p,r2a,p3p,c4p:fix+upg',
      'Human-Hero-4s':      'a4c,r2s,r2c,p3s,c4s:navi',

      'Human-Hero-5a':      'a5s,r3a,r3s,p5a,c5a:mastery',
      'Human-Hero-5c':      'a5p,r3c,r3p,p5c,c5c',
      'Human-Hero-5p':      'a5c,r3p,r3c,p5p,c5p:mastery',
      'Human-Hero-5s':      'a5a,r3s,r3a,p5s,c5s',

      'Human-Hero-6a':      'a6c,r4a,r4c,p6a,c6a',
      'Human-Hero-6c':      'a6a,r4c,r4a,p6c,c6c:mastery',
      'Human-Hero-6p':      'a6s,r4p,r4s,p6p,c6p',
      'Human-Hero-6s':      'a6p,r4s,r4p,p6s,c6s:mastery',


      'Human-Base-1a':      'a2a,p1a:mobilize',
      'Human-Base-1c':      'a2c,p1c:bank',
      'Human-Base-1p':      'a2p,p1p:shipyard',
      'Human-Base-1s':      'a2s,p1s:recycle',

      'Human-Base-2a':      'a1a,c1a,p2a:mobilize',
      'Human-Base-2c':      'a1c,c1c,p2c:bank',
      'Human-Base-2p':      'a1p,c1p,p2p:shipyard',
      'Human-Base-2s':      'a1s,c1s,p2s:recycle',

      'Human-Base-3a':      'a4a,r2a,p3n:stealth',
      'Human-Base-3c':      'a4c,r2c,p3c:heal+acad',
      'Human-Base-3p':      'a4p,r2p,p3p:+load',
      'Human-Base-3s':      'a4s,r2s,p3s:navi',

      'Human-Base-4a':      'a3a,r2a,c3a,p4a:stealth',
      'Human-Base-4c':      'a3c,r2c,c3c,p4c:heal+acad',
      'Human-Base-4p':      'a3p,r2p,c3p,p4p:+++load',
      'Human-Base-4s':      'a3s,r2s,c3s,p4s:navi',

      'Human-Base-5a':      'a6a,r3a,p3n:+takeoff',
      'Human-Base-5p':      'a6p,r3p,p3n:+draw',

      'Human-Base-6a':      'a5a,r4a,p5a:+takeoff,c3a',
      'Human-Base-6p':      'a5p,r4p,p5p:+draw,c3p',


      'Human-Colony-1a':    'a2a,p1a:recon',
      'Human-Colony-1c':    'a2c,p1c:academy',
      'Human-Colony-1p':    'a2p,p1p:extract',
      'Human-Colony-1s':    'a2s,p1s:explore',

      'Human-Colony-2a':    'a1a,c2a,p2a:recon',
      'Human-Colony-2c':    'a1c,c2c,p2c:academy',
      'Human-Colony-2p':    'a1p,c2p,p2p:extract',
      'Human-Colony-2s':    'a1s,c2s,p2s:explore',

      'Human-Colony-3a':    'a4a,r2a,p1a:mobilize',
      'Human-Colony-3c':    'a4c,r2c,p1c:export',
      'Human-Colony-3p':    'a4p,r2p,p1p:fix+shipy',
      'Human-Colony-3s':    'a4s,r2s,p1s:+range',

      'Human-Colony-4a':    'a3a,r2a,c3a,p4a:mobilize',
      'Human-Colony-4c':    'a3c,r2c,c3c,p4c:export',
      'Human-Colony-4p':    'a3p,r2p,c3p,p4p:fix+shipy',
      'Human-Colony-4s':    'a3s,r2s,c3s,p4s:+++range',

      'Human-Colony-5c':    'a6c,r3c,p3c:-deplete',
      'Human-Colony-5s':    'a6s,r3s,p3s:+action',

      'Human-Colony-6c':    'a5c,r4c,p4n:-deplete',
      'Human-Colony-6s':    'a5s,r4s,p4n:+action',

      //'Human-Colony-6a':    'a5a,3a,c3a,r4a,r3c',
      //'Human-Colony-6c':    'a5c,3c,c3c,r4c,r3s',
      //'Human-Colony-6p':    'a5p,3p,c3p,r4p,r3a',
      //'Human-Colony-6s':    'a5s,3s,c3s,r4s,r3p',

      //'Human-Colony-8a':    '4a,c3a,r7a,r7s',
      //'Human-Colony-8c':    '4c,c3c,r7c,r7p',
      //'Human-Colony-8p':    '4p,c3p,r7p,r7c',
      //'Human-Colony-8s':    '4s,c3s,r7s,r7a',
    }
  }
}

export default Human;
