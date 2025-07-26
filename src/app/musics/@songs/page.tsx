import { Clock, Heart} from 'lucide-react';
import React from 'react'
import Link from 'next/link';

const Songs = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));
   
    const songs = [
  {
    id: 1,
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    time: "4:22",
  },
  {
    id: 2,
    title: "Chaiyya Chaiyya",
    artist: "Sukhwinder Singh, Sapna Awasthi",
    time: "6:52",
  },
  {
    id: 3,
    title: "Tujh Mein Rab Dikhta Hai",
    artist: "Roop Kumar Rathod",
    time: "5:40",
  },
  {
    id: 4,
    title: "Kal Ho Naa Ho",
    artist: "Sonu Nigam",
    time: "5:21",
  },
  {
    id: 5,
    title: "Zaalima",
    artist: "Arijit Singh, Harshdeep Kaur",
    time: "4:59",
  },
  {
    id: 6,
    title: "Raabta",
    artist: "Arijit Singh, Nikita Gandhi",
    time: "4:47",
  },
  {
    id: 7,
    title: "Galliyan",
    artist: "Ankit Tiwari",
    time: "5:05",
  },
  {
    id: 8,
    title: "Tera Ban Jaunga",
    artist: "Akhil Sachdeva, Tulsi Kumar",
    time: "3:56",
  },
  {
    id: 9,
    title: "Kabira",
    artist: "Tochi Raina, Rekha Bhardwaj",
    time: "4:18",
  },
  {
    id: 10,
    title: "Kesariya",
    artist: "Arijit Singh",
    time: "4:28",
  },
  {
    id: 11,
    title: "Dil Diyan Gallan",
    artist: "Atif Aslam",
    time: "4:21",
  },
  {
    id: 12,
    title: "Apna Bana Le",
    artist: "Arijit Singh",
    time: "3:58",
  },
  {
    id: 13,
    title: "Tera Yaar Hoon Main",
    artist: "Arijit Singh",
    time: "5:12",
  },
  {
    id: 14,
    title: "Hawayein",
    artist: "Arijit Singh",
    time: "4:51",
  },
  {
    id: 15,
    title: "Jeene Laga Hoon",
    artist: "Atif Aslam, Shreya Ghoshal",
    time: "4:46",
  },
  {
    id: 16,
    title: "Badtameez Dil",
    artist: "Benny Dayal",
    time: "4:13",
  },
  {
    id: 17,
    title: "Senorita",
    artist: "Farhan Akhtar, Hrithik Roshan, Abhay Deol, Maria del Mar Fernández",
    time: "4:55",
  },
  {
    id: 18,
    title: "Pee Loon",
    artist: "Mohit Chauhan",
    time: "4:52",
  },
  {
    id: 19,
    title: "Malang (Title Track)",
    artist: "Ved Sharma",
    time: "4:48",
  },
  {
    id: 20,
    title: "Lutt Gaye",
    artist: "Jubin Nautiyal",
    time: "4:34",
  },
];

  return (
    <div className='w-[96%] mx-auto px-4'>
      <h1 className='text-3xl text-white mt-8 font-bold mb-6'>Songs Collections</h1>
      <ul className='space-y-4'>
        {songs.map((song) => (
          <Link href={`/musics/${song.id}`} key={song.id}>
          <li key={song.id} 
          
          className='flex items-center justify-between p-3 
          hover:bg-[#2A2929] rounded-md cursor-pointer
          transition-all duration-200 ease-in-out transform
          hover:scale-105'>
            
            <div className='flex items-center gap-5'>
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0mJ5YnYcAXBbQfIwowJUqf8cOi3J5PYo4fscSkuV8xf9adkWnqkBEGFCaNp-uQ0nW0sO1qc5qTUuTcMR4EBru_6vC7GEiTVBLU9j05AEW"

                className='h-16 w-16 bg-gray-700 rounded-md
                flex-shrink-0 ' />
                <div>
                    <p className='text-white font-medium'>{song.title}</p>
                    <p className='text-gray-400'>{song.artist}</p>
                </div>
            </div>
            <div className='flex items-center gap-6 text-gray-400'>
                <div className='flex items-center gap-1'>
                    <Clock size={16} />
                    <span>{song.time}</span>
                </div>
                <Heart size={16} className='cursor-pointer hover:text-red-500' />

                <button className='text-lg font-bold'></button>
            </div>
          </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Songs
