import rizal from '../assets/rizal.svg'
import Sosmed from './Sosmed'
const Cards = () => {
  return (
    <>
      <div className="w-[150px] sm:w-[200px] lg:w-[250px] xl:translate-y-[180px] lg:h-[280px] sm:h-[230px] md:w-[220px] md:h-[250px] xl:w-[300px] xl:h-[320px] xl:ml-36  fixed h-[200px] rounded-[10px] justify-center  sm:translate-y-32  translate-y-[120px] ml-5 bg-[#243137] shadow-[15px_15px_30px_rgb(25,25,25),-15px_-15px_30px_rgb(60,60,60)] z-30">
        {/* Perbesar ukuran gambar */}
        <img src={rizal} className="-translate-y-6   " />
        
        <p className='text-[15px] sm:text-[20px] xl:text-2xl xl:-mt-20 font-extrabold -mt-12 text-center text-[#bd9f67]'>Muhammad Rizal</p>
        <p className='text-[8px] sm:text-[10px] text-center font-bold xl:text-sm text-[#bd9f67]'>Mahasiswa || Teknik Informatika</p>
        
        <div className="bg-white rounded-md gap-4 h-10 p-2 flex items-center justify-center mt-3 w-[145px] ml-2">
         <Sosmed />
        </div>
      </div>
    </>
  )
}

export default Cards
