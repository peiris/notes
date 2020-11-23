import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      {/* <img
        src="/vercel-and-notion.png"
        height="85"
        width="250"
        alt="Vercel + Notion"
      /> */}
      <img
        src="/logo.svg"
        alt="kasun.io logo image svg"
        height={20}
        width={100}
      />
      <h1>Notes by Kasun Peiris</h1>
      <h2>
        Founder / CTO —{' '}
        <ExtLink
          href="https://karapincha.studio"
          className="dotted"
          style={{ color: 'inherit' }}
        >
          Karapincha Studio
        </ExtLink>
      </h2>

      {/* <Features /> */}

      <br />

      <div className="explanation">
        <p>
          Imperdiet lectus, iaculis fusce sapien. Habitant orci pellentesque
          sollicitudin pretium vel a semper habitant potenti nulla mus. Nisi
          odio, rhoncus eu cras mi augue fringilla. Duis sit hac enim pulvinar
          proin arcu curae; aliquet potenti quisque arcu. Tempor congue quis
          mattis elit magna ante consequat aliquet. Mi faucibus vehicula semper
          feugiat tincidunt. Curabitur mauris auctor non luctus neque magnis
          magna convallis purus dolor. Fringilla curae; at fames mauris. Vel
          ornare posuere dictumst. Curabitur pulvinar laoreet sociis felis
          montes libero, vehicula id ipsum ultrices. Taciti nullam non.
        </p>

        <p>
          Eget lectus sit curabitur fusce odio nunc ligula eros. Montes vehicula
          accumsan luctus curae;? Egestas penatibus dictumst mollis at quis,
          varius auctor. Volutpat imperdiet congue odio ultrices integer
          gravida. Gravida eu quis elit. Habitasse netus eleifend orci purus
          odio eros dis risus interdum eros. Litora praesent pharetra eleifend
          praesent dignissim blandit. Ultricies quisque montes ullamcorper a
          nec. Nam mattis dapibus nam in porta! Sed vestibulum phasellus platea.
          Fames viverra aenean egestas justo cum velit dignissim et dis cum ad
          dolor? Non odio sed ad mus. Hac laoreet varius mi? Justo.
        </p>
      </div>
    </div>
  </>
)
