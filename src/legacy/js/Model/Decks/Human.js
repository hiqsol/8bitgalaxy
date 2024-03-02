// powers: a, c, p, s
// available unique combinations:
// a-c, a-p, a-s, c-p, c-s, p-s
// c-a, p-a, s-a, p-c, s-c, s-p
class Human {

  static cards() {
    return {
      'Human-Ship-1a':      'a1a,p1a,c1a',
      'Human-Ship-1c':      'a1c,p1c,c1c',
      'Human-Ship-1p':      'a1p,p1p,c1p',
      'Human-Ship-1s':      'a1s,p1s,c1s',

      'Human-Ship-2a':      'a3s,p1a,c1a',
      'Human-Ship-2c':      'a3a,p1c,c1c',
      'Human-Ship-2p':      'a3c,p1p,c1p',
      'Human-Ship-2s':      'a3p,p1s,c1s',

      'Human-Ship-3a':      'a2p,p1a,c1a:recon',
      'Human-Ship-3c':      'a2a,p1c,c1c:upgrade',
      'Human-Ship-3p':      'a2s,p1p,c1p:repair',
      'Human-Ship-3s':      'a2c,p1s,c1s:navi',

      'Human-Ship-4c':      'a5a,r2c,r3a,p2c,c1c',
      'Human-Ship-4s':      'a5p,r2s,r3p,p2s,c1s',
      'Human-Ship-5a':      'a4c,r3a,r2c,p2a,c2a',
      'Human-Ship-5p':      'a4s,r3p,r2s,p2p,c2p',

      'Human-Ship-6a':      'a5s,r4a,r3s,p3a,c2a',
      'Human-Ship-6p':      'a5c,r4p,r3c,p3p,c2p',
      'Human-Ship-5c':      'a6p,r3c,r4p,p2c,c2c',
      'Human-Ship-5s':      'a6a,r3s,r4a,p2s,c2s',


      'Human-Hero-1a':      'a1c,p1a,c1a:retreat',
      'Human-Hero-1c':      'a1a,p1c,c1c',
      'Human-Hero-1p':      'a1s,p1p,c1p:extract',
      'Human-Hero-1s':      'a1p,p1s,c1s',

      'Human-Hero-2a':      'a2s,p2a,c2a',
      'Human-Hero-2c':      'a2p,p2c,c2c:trade',
      'Human-Hero-2p':      'a2c,p2p,c2p',
      'Human-Hero-2s':      'a2a,p2s,c2s:explore',

      'Human-Hero-3a':      'a3p,p3a,c3a,r1a,r1p',
      'Human-Hero-3c':      'a3s,p3c,c3c,r1c,r1s',
      'Human-Hero-3p':      'a3a,p3p,c3p',
      'Human-Hero-3s':      'a3c,p3s,c3s',

      'Human-Hero-4a':      'a4p,r2a,r2p,p4a,c4a',
      'Human-Hero-4c':      'a4s,r2c,r2s,p4c,c4c',
      'Human-Hero-4p':      'a4a,r2p,r2a,p4p,c4p:mastery',
      'Human-Hero-4s':      'a4c,r2s,r2c,p4s,c4s:mastery',

      'Human-Hero-5a':      'a5s,p5a,c5a,r3a,r3s',
      'Human-Hero-5c':      'a5p,p5c,c5c',
      'Human-Hero-5p':      'a5c,p5p,c5p,r3p,r3c',
      'Human-Hero-5s':      'a5a,p5s,c5s',

      'Human-Hero-6a':      'a6c,p6a,c6a',
      'Human-Hero-6c':      'a6a,p6c,c6c,r4c,r4a',
      'Human-Hero-6p':      'a6s,p6p,c6p',
      'Human-Hero-6s':      'a6p,p6s,c6s,r4s,r4p',


      'Human-Base-1a':      'a2a,p1a:recon',
      'Human-Base-1p':      'a2p,p1p:shipyard',

      'Human-Base-2a':      'a1a,p2a:recon,c2a',
      'Human-Base-2p':      'a1p,p2p:shipyard,c2p',

      'Human-Base-3c':      'a4c,r1c,p3c:trade',
      'Human-Base-3s':      'a4s,r1s,p3s:navi',

      'Human-Base-4c':      'a3c,r2c,p4c:trade,c3c',
      'Human-Base-4s':      'a3s,r2s,p4s:navi,c3s',

      'Human-Base-5a':      'a6a,r3a,p3n:+takeoff',
      'Human-Base-5p':      'a6p,r3p,p3n:+draw',

      'Human-Base-6a':      'a5a,r4a,p5a:+takeoff,c3a',
      'Human-Base-6p':      'a5p,r4p,p5p:+draw,c3p',


      'Human-Colony-1c':    'a2c,p1c:academy',
      'Human-Colony-1s':    'a2s,p1s:research',

      'Human-Colony-2c':    'a1c,p2c:academy,c2c',
      'Human-Colony-2s':    'a1s,p2s:research,c2s',

      'Human-Colony-3a':    'a4a,r2a,p1a:mltrztn',
      'Human-Colony-3p':    'a4p,r2p,p1p:extract',

      'Human-Colony-4a':    'a3a,r2a,p4a:mltrztn,c3a',
      'Human-Colony-4p':    'a3p,r2p,p4p:extract,c3p',

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
