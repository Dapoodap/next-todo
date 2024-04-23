import Image from 'next/image'
import clip from '../../public/assets/Clipboard.png'

function NoTodo() {
 
  return (
    <div className='flex flex-col items-center justify-center w-full px-5 py-32 m-auto my-5 md:w-3/5' style={{ borderTop:'2px solid #333333',borderRadius:'18px'  }}>
       <Image
      lazyRoot="lazy"
      className="bg-transparent"
      src={clip}
      style={{ width:'58px',height:'58px' }}
      alt="Picture of the author"
    />
    <div className='my-5 text-center'>
    <h4 style={{ fontSize:'16px',fontWeight:'500',color:'#808080' }}>Belum ada aktivitas yang ditambahkan</h4>
    <p  style={{ fontSize:'16px',fontWeight:'200',color:'#808080' }}>ketuk tambah untuk membuat aktivitas baru</p>

    </div>
    </div>
  )
}

export default NoTodo