import React from 'react'
import { classname } from '../../../utils/utils'
import Container from '../../UI/Container/Container'
import Divider from '../../UI/Divider/Divider'
import './AboutProject.css'

const AboutProject = () => {
  const { block, element } = classname('about-project')

  return (
    <section className={block}>
      <Container>
        <div className={element('content')}>
          <h3>
            О проекте
          </h3>
          <Divider className={element('divider')} />
          <div className={element('stages')}>
            <div className={element('stage')}>
              <h4>Дипломный проект включал 5 этапов</h4>
              <p className={element('stage-description')}>
                Составление плана,
                работу над бэкендом, вёрстку,
                добавление функциональности и финальные доработки.
              </p>
            </div>
            <div className={element('stage')}>
              <h4>На выполнение диплома ушло 5 недель</h4>
              <p className={element('stage-description')}>
                У каждого этапа был мягкий и жёсткий дедлайн,
                которые нужно было соблюдать,
                чтобы успешно защититься.
              </p>
            </div>
          </div>

          <div className={element('time-completion')}>
            <p
              className={element('time-completion-weeks', { backend: true })}
            >
              1 неделя
            </p>
            <p
              className={element('time-completion-weeks', { frontend: true })}
            >
              4 недели
            </p>

            <p
              className={element('time-completion-placeholder')}
            >
              Back-end
            </p>
            <p
              className={element('time-completion-placeholder')}
            >
              Front-end
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutProject
