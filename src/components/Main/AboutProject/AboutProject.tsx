import React from 'react'
import { classname } from '../../../utils/utils'
import { Container, Heading, Divider, Text } from '../../UI'

import './AboutProject.css'

function AboutProject(): JSX.Element {
  const { block, element } = classname('about-project')

  return (
    <section className={block}>
      <Container>
        <div className={element('content')}>
          <Heading as='h3' className={element('title')}>
            О проекте
          </Heading>
          <Divider className={element('divider')} />
          <div className={element('stages')}>
            <div className={element('stage')}>
              <Heading as='h4' className={element('stage-title')}>Дипломный проект включал 5 этапов</Heading>
              <Text className={element('stage-description')}>
                Составление плана,
                работу над бэкендом, вёрстку,
                добавление функциональности и финальные доработки.
              </Text>
            </div>
            <div className={element('stage')}>
              <Heading as='h4' className={element('stage-title')}>На выполнение диплома ушло 5 недель</Heading>
              <Text className={element('stage-description')}>
                У каждого этапа был мягкий и жёсткий дедлайн,
                которые нужно было соблюдать,
                чтобы успешно защититься.
              </Text>
            </div>
          </div>

          <div className={element('duration')}>
            <Text
              className={element('duration-weeks', { backend: true })}
            >
              1 неделя
            </Text>
            <Text
              className={element('duration-weeks', { frontend: true })}
            >
              4 недели
            </Text>

            <Text
              className={element('duration-stage')}
            >
              Back-end
            </Text>
            <Text
              className={element('duration-stage')}
            >
              Front-end
            </Text>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutProject
