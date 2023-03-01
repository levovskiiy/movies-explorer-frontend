import React from 'react'
import { classname } from '../../../utils/utils'
import Container from '../../UI/Container/Container'
import Divider from '../../UI/Divider/Divider'
import Heading from '../../UI/Heading/Heading'
import Paragraph from '../../UI/Paragraph/Paragraph'
import './AboutProject.css'

const AboutProject = () => {
  const { block, element } = classname('about-project')

  return (
    <section className={block}>
      <Container>
        <div className={element('content')}>
          <Heading as='h3' size='md'>
            О проекте
          </Heading>
          <Divider className={element('divider')} />
          <div className={element('stages')}>
            <div className={element('stage')}>
              <Heading as='h4' size='sm'>Дипломный проект включал 5 этапов</Heading>
              <Paragraph>
                Составление плана,
                работу над бэкендом, вёрстку,
                добавление функциональности и финальные доработки.
              </Paragraph>
            </div>
            <div className={element('stage')}>
              <Heading as='h4' size='sm'>На выполнение диплома ушло 5 недель</Heading>
              <Paragraph>
                У каждого этапа был мягкий и жёсткий дедлайн,
                которые нужно было соблюдать,
                чтобы успешно защититься.
              </Paragraph>
            </div>
          </div>

          <div className={element('time-completion')}>
            <Paragraph
              size='sm'
              className={element('time-completion-weeks', { backend: true })}
            >
              1 неделя
            </Paragraph>
            <Paragraph
              size='sm'
              className={element('time-completion-weeks', { frontend: true })}
            >
              4 недели
            </Paragraph>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutProject
