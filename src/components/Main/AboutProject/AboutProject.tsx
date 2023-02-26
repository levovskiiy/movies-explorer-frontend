import React from 'react'
import Container from '../../UI/Container/Container'
import Divider from '../../UI/Divider/Divider'
import Heading from '../../UI/Heading/Heading'
import Paragraph from '../../UI/Paragraph/Paragraph'
import './AboutProject.css'

const AboutProject = () => {
  return (
    <section className='about-project'>
      <Container>
        <div className='about-project__content'>
          <Heading as='h3' size='md'>
            О проекте
          </Heading>
          <Divider className='about-project__divider' />
          <div className="about-project__stages">
            <div className="about-project__stage">
              <Heading as='h4' size='sm'>Дипломный проект включал 5 этапов</Heading>
              <Paragraph>
                Составление плана,
                работу над бэкендом, вёрстку,
                добавление функциональности и финальные доработки.
              </Paragraph>
            </div>
            <div className="about-project__stage">
              <Heading as='h4' size='sm'>На выполнение диплома ушло 5 недель</Heading>
              <Paragraph>
                У каждого этапа был мягкий и жёсткий дедлайн,
                которые нужно было соблюдать,
                чтобы успешно защититься.
              </Paragraph>
            </div>
          </div>

          <div className="about-project__time-completion">
            <Paragraph
              size='sm'
              className='
                about-project__time-completion-weeks
                about-project__time-completion-weeks_backend'
            >
              1 неделя
            </Paragraph>
            <Paragraph
              size='sm'
              className='
                about-project__time-completion-weeks
                about-project__time-completion-weeks_frontend'
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
