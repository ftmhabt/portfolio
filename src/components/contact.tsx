import Icon from '@mdi/react';
import { mdiAt,mdiPhone,mdiMapMarker,mdiLinkedin } from '@mdi/js';


export default function Contact() {
  return (
    <div className='flex flex-col gap-5 *:flex *:gap-2 *:border *:border-[#1d1d1d] *:w-fit first:*:border-0 *:p-2 *:pr-4 first:*:p-0 *:rounded-md'>
      <div>Interested in working together? Let's chat!</div>
      <div><Icon path={mdiAt} size={1} />ftmh.a78@gmail.com</div>
      <div><Icon path={mdiPhone} size={1} />+98 922 9688 704</div>
      <div><Icon path={mdiMapMarker} size={1} />Qom, Iran</div>
      <div><Icon path={mdiLinkedin} size={1} /><a href="https://www.linkedin.com/in/fatemeh-abtahi/">Fatemeh Abtahi</a></div>
    </div>
  )
}
