import Head from "next/head";

export default function Layout({children, game}) {
  return (
    <>
      <Head>
        <title>8-bit Galaxy</title>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
      </Head>
      {game ? (
        <>
          <style global jsx>{`
          body {
            background-color: #787;
          }
          `}
          </style>
          {children}
        </>
      ) : (
        <div className="container mx-auto pt-4">
          {children}
        </div>
      )}
    </>
  );
}