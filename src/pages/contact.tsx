import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/peiris__',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/peiris',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/kasunharshana/',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:me@kasun.io?subject=Notes Blog',
  },
]

export default () => (
  <>
    <Header titlePre="Contact" />
    <div className={sharedStyles.layout}>
      <h1 style={{ marginTop: 0, marginBottom: 40 }}>Contact</h1>

      <div className={contactStyles.name}>
        Kasun Peiris - Founder / CTO @{' '}
        <ExtLink href="https://karapincha.studio">Karapincha Studio</ExtLink>
      </div>

      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>
    </div>
  </>
)
