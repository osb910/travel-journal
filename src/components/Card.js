import {useEffect, useState} from 'react';
import {getHtmlDate} from '../utils/general-utils';
import pin from '../images/pin.svg';

export default function Card({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) {
  const startHtmlDate = getHtmlDate(startDate);
  const endHtmlDate = getHtmlDate(endDate);
  const [[imgUrl, imgDesc], setImage] = useState(['', '']);

  useEffect(() => {
    const imgID = imageUrl.match(/(?<=\/)\w+$/)[0];
    const getImage = async () => {
      const baseURL = `https://api.unsplash.com/photos`;
      const key = 'KRfbaM83Plv9H8a_iEGkZt7TRDewvhk7ata6zJwmekY';
      const response = await fetch(`${baseURL}/${imgID}?client_id=${key}`);
      const {
        urls: {regular},
        alt_description,
      } = await response.json();
      setImage([regular, alt_description]);
    };
    getImage();
  }, [imgUrl, imgDesc, imageUrl]);

  return (
    <article className='card'>
      <img src={imgUrl} alt={imgDesc} />
      <div className='location'>
        <img src={pin} alt='' />
        <span className='country'>{location}</span>
        <a href={googleMapsUrl} target='_blank' rel='noreferrer'>
          View on Google Maps
        </a>
      </div>
      <h2 className='title'>{title}</h2>
      <div className='duration'>
        <time dateTime={startHtmlDate}>{startDate}</time> -{' '}
        <time dateTime={endHtmlDate}>{endDate}</time>
      </div>
      <p>{description}</p>
    </article>
  );
}
