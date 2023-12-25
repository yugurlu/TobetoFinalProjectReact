
import React from 'react'
import './MainSection.css'

function MainSection() {
  return (
    <section>
        <div className='container'>
            <div className='row cv-box cv-padding display-flex mmt-n-4'>
                <div className='col-12 ik-logo-platform'>
                    <div className='p-4'>
                        <span className='tobeto-main-logo'>
                            <img src='https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg'/>
                        </span>
                    </div>
                    <div className='mt-2 d-flex flex-column justify-content-center px-10 text-center'>
                        <span className='header-text-md mt-4 '>Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.</span>
                        <span className='header-text mt-4 mb-4'>
                            Aradığın 
                            <span className='quot'>&nbsp; “</span>
                            İş
                            <span className='quot'>” &nbsp; </span>
                            Burada!
                        </span>
                    </div>
                </div>
                <div className='col-12 mb-4'>
                    <ul className='nav nav-tabs mainTablist' role='tablist'>
                        <li className='nav-item' role='presentation'>
                            <button className='nav-link active'>Başvurularım</button>
                        </li>
                        <li className='nav-item' role='presentation'>
                            <button className='nav-link '>Eğitimlerim</button>
                        </li>
                        <li className='nav-item' role='presentation'>
                            <button className='nav-link '>Duyuru ve Haberlerim</button>
                        </li>
                        <li className='nav-item' role='presentation'>
                            <button className='nav-link '>Anketlerim</button>
                        </li>
                        <li className='nav-item' role='presentation'>
                            <button className='nav-link '>Sınavlarım</button>
                        </li>
                    </ul>      
                </div>
            </div>
        </div>
    </section>
  )
}

export default MainSection