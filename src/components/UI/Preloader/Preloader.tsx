import React from 'react'
import { classname } from '../../../utils/utils'
import './Preloader.css'

type PreloaderProps = {
  className?: string
}

function Preloader({ className }: PreloaderProps): JSX.Element {
  const { block, element } = classname('preloader', {}, [className])

  console.log(className)
  return (
    <div className={block}>
      <div className={element('container')}>
        <span className={element('round')}></span>
      </div>
    </div>
  )
};

export default Preloader
