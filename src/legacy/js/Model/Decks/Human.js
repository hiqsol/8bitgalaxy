// powers: a, c, p, s
// available unique combinations:
// a-c, a-p, a-s, c-p, c-s, p-s
// c-a, p-a, s-a, p-c, s-c, s-p
class Human {

  static cards() {
    return {
      'Human-Ship-1a':      'a2c,p1a,c1a',
      'Human-Ship-1c':      'a2p,p1c,c1c',
      'Human-Ship-1p':      'a2s,p1p,c1p',
      'Human-Ship-1s':      'a2a,p1s,c1s',

      'Human-Ship-2a':      'a1s,p1a,c0a:recon',
      'Human-Ship-2c':      'a1a,p1c,c1c',
      'Human-Ship-2p':      'a1c,p1p,c1p',
      'Human-Ship-2s':      'a1p,p1s,c1s',

      'Human-Ship-3a':      'a4p,p1a,c1a',
      'Human-Ship-3c':      'a4a,p1c,c1c',
      'Human-Ship-3p':      'a4s,p1p,c1p',
      'Human-Ship-3s':      'a4c,p1s,c1s',

      'Human-Ship-4a':      'a3c,p2a,c1a,r2a,r1c',
      'Human-Ship-4c':      'a3s,p2c,c1c,r2c,r1s',
      'Human-Ship-4p':      'a3a,p2p,c1p,r2p,r1a',
      'Human-Ship-4s':      'a3p,p2s,c1s,r2s,r1p',

      'Human-Ship-5a':      'a6c,p2a,c2a',
      'Human-Ship-5c':      'a6s,p2c,c2c',
      'Human-Ship-5p':      'a6a,p2p,c2p',
      'Human-Ship-5s':      'a6p,p2s,c2s',

      'Human-Ship-6a':      'a5p,p3a,c2a,r4a,r3p',
      'Human-Ship-6c':      'a5a,p3c,c2c,r4c,r3a',
      'Human-Ship-6p':      'a5s,p3p,c2p,r4p,r3s',
      'Human-Ship-6s':      'a5c,p3s,c2s,r4s,r3c',

      //'Human-Ship-6a':      '4a,c3a,a7s,r5a,r5s',
      //'Human-Ship-6c':      '4c,c3c,a7p,r5c,r5p',
      //'Human-Ship-6p':      '4p,c3p,a7a,r5p,r5a',
      //'Human-Ship-6s':      '4s,c3s,a7c,r5s,r5c',

      //'Human-Ship-7a':      '4a,c3a,a6p',
      //'Human-Ship-7c':      '4c,c3c,a6s',
      //'Human-Ship-7p':      '4p,c3p,a6c',
      //'Human-Ship-7s':      '4s,c3s,a6a',

      //'Human-Ship-8a':      '4a,c4a,r7a,r7c',
      //'Human-Ship-8c':      '4c,c4c,r7c,r7s',
      //'Human-Ship-8p':      '4p,c4p,r7p,r7a',
      //'Human-Ship-8s':      '4s,c4s,r7s,r7p',


      'Human-Hero-1a':      'a1c,p1a,c1a:retreat',
      'Human-Hero-1c':      'a1a,p1c,c1c',
      'Human-Hero-1p':      'a1s,p1p,c1p',
      'Human-Hero-1s':      'a1p,p1s,c1s',

      'Human-Hero-2a':      'a2s,p2a,c2a',
      'Human-Hero-2c':      'a2p,p2c,c2c',
      'Human-Hero-2p':      'a2c,p2p,c2p',
      'Human-Hero-2s':      'a2a,p2s,c2s',

      'Human-Hero-3a':      'a3p,p3a,c3a,r1a,r1p',
      'Human-Hero-3c':      'a3s,p3c,c3c,r1c,r1s',
      'Human-Hero-3p':      'a3a,p3p,c3p',
      'Human-Hero-3s':      'a3c,p3s,c3s',

      'Human-Hero-4a':      'a4p,p4a,c4a',
      'Human-Hero-4c':      'a4s,p4c,c4c',
      'Human-Hero-4p':      'a4a,p4p,c4p,r2p,r2a',
      'Human-Hero-4s':      'a4c,p4s,c4s,r2s,r2c',

      'Human-Hero-5a':      'a5s,p5a,c5a,r3a,r3s',
      'Human-Hero-5c':      'a5p,p5c,c5c',
      'Human-Hero-5p':      'a5c,p5p,c5p,r3p,r3c',
      'Human-Hero-5s':      'a5a,p5s,c5s',

      'Human-Hero-6a':      'a6c,p6a,c6a',
      'Human-Hero-6c':      'a6a,p6c,c6c,r4c,r4a',
      'Human-Hero-6p':      'a6s,p6p,c6p',
      'Human-Hero-6s':      'a6p,p6s,c6s,r4s,r4p',

      //'Human-Hero-7a':      '7a,a8a,r6a',
      //'Human-Hero-7c':      '7c,a8c,r6c',
      //'Human-Hero-7p':      '7p,a8p,r6p',
      //'Human-Hero-7s':      '7s,a8s,r6s',

      //'Human-Hero-8a':      '8a,a7a',
      //'Human-Hero-8c':      '8c,a7c',
      //'Human-Hero-8p':      '8p,a7p',
      //'Human-Hero-8s':      '8s,a7s',


      'Human-Base-1a':      'a2s,p1a:eXplr',
      'Human-Base-1c':      'a2a,p1c: bank',
      'Human-Base-1p':      'a2c,p1p:sYard',
      'Human-Base-1s':      'a2p,p1s:eXplr',

      'Human-Base-2a':      'a1c,p2a:dfSys',
      'Human-Base-2c':      'a1p,p2c:effUp',
      'Human-Base-2p':      'a1s,p2p:xtrct',
      'Human-Base-2s':      'a1a,p2s: +lab',

      'Human-Base-3a':      'a4c,p3a:+hand',
      'Human-Base-3c':      'a4s,p3c:+hero',
      'Human-Base-3p':      'a4a,p3p:sYard',
      'Human-Base-3s':      'a4p,p3s: navi',

      'Human-Base-4a':      'a3p,p4a:milit,r2a,r1p',
      'Human-Base-4c':      'a3a,p4c:trade,r2c,r1a',
      'Human-Base-4p':      'a3s,p4p: +fac,r2p,r1s',
      'Human-Base-4s':      'a3c,p4s:hyper,r2s,r1c',

      'Human-Base-5a':      'a6c,p5a:  red',
      'Human-Base-5c':      'a6p,p5c:green',
      'Human-Base-5p':      'a6s,p5p:yelow',
      'Human-Base-5s':      'a6a,p5s: blue',

      'Human-Base-6a':      'a5s,p6a: nuke,r4a,r3s',
      'Human-Base-6c':      'a5a,p6c:colab,r4c,r3a',
      'Human-Base-6p':      'a5c,p6p:sYard,r4p,r3c',
      'Human-Base-6s':      'a5p,p6s:espio,r4s,r3p',

      //'Human-Base-7a':      '5a,c2a,a8p,r6a,r6p',
      //'Human-Base-7c':      '5c,c2c,a8a,r6c,r6a',
      //'Human-Base-7p':      '5p,c2p,a8s,r6p,r6s',
      //'Human-Base-7s':      '5s,c2s,a8c,r6s,r6c',

      //'Human-Base-8a':      '5a,c3a,a7c',
      //'Human-Base-8c':      '5c,c3c,a7s',
      //'Human-Base-8p':      '5p,c3p,a7a',
      //'Human-Base-8s':      '5s,c3s,a7p',


      'Human-Colony-1a':    'a2p,1a',
      'Human-Colony-1c':    'a2s,1c',
      'Human-Colony-1p':    'a2c,1p',
      'Human-Colony-1s':    'a2a,1s',

      'Human-Colony-2a':    'a1p,1a,c1a',
      'Human-Colony-2c':    'a1s,1c,c1c',
      'Human-Colony-2p':    'a1c,1p,c1p',
      'Human-Colony-2s':    'a1a,1s,c1s',

      'Human-Colony-3a':    'a4s,2a,c1a',
      'Human-Colony-3c':    'a4p,2c,c1c',
      'Human-Colony-3p':    'a4a,2p,c1p',
      'Human-Colony-3s':    'a4c,2s,c1s',

      'Human-Colony-4a':    'a3s,2a,c2a,r2a,r1s',
      'Human-Colony-4c':    'a3p,2c,c2c,r2c,r1p',
      'Human-Colony-4p':    'a3a,2p,c2p,r2p,r1a',
      'Human-Colony-4s':    'a3c,2s,c2s,r2s,r1c',

      'Human-Colony-5a':    'a6p,3a,c2a',
      'Human-Colony-5c':    'a6a,3c,c2c',
      'Human-Colony-5p':    'a6s,3p,c2p',
      'Human-Colony-5s':    'a6c,3s,c2s',

      'Human-Colony-6a':    'a5c,3a,c3a,r4a,r3c',
      'Human-Colony-6c':    'a5s,3c,c3c,r4c,r3s',
      'Human-Colony-6p':    'a5a,3p,c3p,r4p,r3a',
      'Human-Colony-6s':    'a5p,3s,c3s,r4s,r3p',

      //'Human-Colony-8a':    '4a,c3a,r7a,r7s',
      //'Human-Colony-8c':    '4c,c3c,r7c,r7p',
      //'Human-Colony-8p':    '4p,c3p,r7p,r7c',
      //'Human-Colony-8s':    '4s,c3s,r7s,r7a',
    }
  }
}

export default Human;
