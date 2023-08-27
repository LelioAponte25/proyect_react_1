import getRandomAlemArray from "../utils/getRandomElemArray"

const BtnQuote = ({setQuote, phrases, setNumberBg}) => {

  const handleRandomPhrase = () => {

  setQuote(getRandomAlemArray(phrases))
  setNumberBg(getRandomAlemArray([3, 2, 1, 4]))

  }

  return (
    <button className="container__btn" onClick={handleRandomPhrase}>Other phrase🤔</button>
  )
}

export default BtnQuote