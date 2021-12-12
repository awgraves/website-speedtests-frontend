import Site from './types';

type SitesListProps = {
  sites: Site[]
}

const SitesList: React.FC<SitesListProps> = ({ sites }) => {

  return (
    <ul>
        {sites.map((s) => <div>{s.url}</div>)}
    </ul>
  )
}

export default SitesList