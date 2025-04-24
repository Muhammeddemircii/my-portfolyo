import React from 'react'

function AboutScreen() {
    return (
        <div>
            <div id='about' className='  py-20 bg-white  text-gray-800  '>
                <h1 className='text-4xl font-bold mb-8 border-b-2 border-blue-500 inline-block ml-36 hover:border-blue-700 transition duration-300 ease-in-out'>
                    Hakkımda
                </h1>
                <div className=' space-y-6 leading-relaxed animate-fade-in inline-block'>
                    <p className='px-36'>👋 Merhaba, ben <span className='font-semibold text-blue-600'>Muhammed</span>. Burdur Mehmet Akif Ersoy Üniversitesi’nde Bilişim Sistemleri ve Teknolojileri mezunuyum.</p>

                    <p className='px-36'>🎯 Frontend geliştirme alanında uzmanlaşarak <span className='font-semibold'>HTML, CSS, JavaScript, React, Next.js</span> gibi modern web teknolojileriyle kullanıcı dostu arayüzler geliştiriyorum.</p>

                    <p className='px-36'>💼 Daha önce <span className='font-semibold'>BTARGE</span> ve <span className='font-semibold'>Ledbim</span> gibi firmalarda deneyim kazandım. Kod yazmanın ötesinde, <span className='italic'>kullanıcı deneyimini ön planda tutmaya</span> ve <span className='italic'>anlamlı tasarımlar üretmeye</span> önem veriyorum.</p>

                    <p className='px-36'>🚀 Şu anda kariyerimi <span className='font-semibold'>Frontend Developer</span> olarak şekillendiriyorum ve her gün yeni teknolojiler öğrenmekten büyük keyif alıyorum.</p>
                </div>
            </div>
        </div>

    )
}

export default AboutScreen