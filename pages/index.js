import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> Web Developer from SF Bay Area now living in Denver. </p>
        <p>You can contact me on <Link href="https://twitter.com/guywithnosn"><a target="_blank">Twitter</a></Link> and<Link href="https://www.linkedin.com/in/ari-bandong/"><a target="_blank"> LinkedIn</a></Link></p>
          <p> Don't forget to check out my <Link href="https://github.com/ariband5"><a target="_blank">GitHub</a></Link>.</p>
        
        <p>Also, check out this <Link href="/crypto" target="_blank"><a>cryptocurrency tracker</a></Link>  that uses the <Link href="https://developers.coinbase.com/api/v2"><a target="_blank">Coinbase</a>g</Link> API.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}