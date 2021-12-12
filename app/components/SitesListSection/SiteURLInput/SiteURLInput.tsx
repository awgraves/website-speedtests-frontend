import styles from './SiteURLInput.module.css'
import Button from '../../Button/Button'
import { ReactEventHandler, useState } from 'react'
import SitesListType from '../types'

type SiteUrlInputProps = {
  listedUrls: SitesListType;
  setListedUrls: React.Dispatch<React.SetStateAction<SitesListType>>;
}

const SiteURLInput: React.FC<SiteUrlInputProps> = ({listedUrls, setListedUrls}) => {

  const [userInput, setUserInput] = useState<string>("");
  const [isValidating, setIsValidating] = useState<boolean>(false);

  const handleInput = (event: any) => {
    setUserInput(event.target.value)
  }

  const myClick = () => {
    setIsValidating(true);
    setListedUrls([...listedUrls, {'url': userInput, 'favicon': '/favicon.ico'}]);
    setUserInput("");
}

  return (
  <div className={styles.urlinputcontainer}>
    <div className={styles.inputwrapper}>
      <span>https://</span>
      <input className={styles.input} placeholder="www.sitename.com" value={userInput} onChange={handleInput} />
    </div>
    { userInput.length ? <Button text="+ Add This URL" onClick={myClick} isProcessing={isValidating}></Button>:null }
  </div>
  )
}

export default SiteURLInput