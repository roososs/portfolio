import { useTranslation } from 'react-i18next'

function Experience() {
  const { t } = useTranslation()
  return (
    <section id='experiences-educations'>
      <div class='container'>
        <div class='header'>
          <span class='big-title'>{t('experiences_education')}</span>
        </div>
        <div class='content'>
          <div class='educations'>
            <div class='timeline-area'>
              <div>
                <span class='date'>AOUT 2018 / NOVEMBER 2018</span>
                <div class='row-txt'>
                  <span class='fst-txt'>Formation en ligne, </span>
                  <span class='snd-txt'>ONE MILLION ARABCODERS </span>
                </div>
                <span class='description'>Front-End Developer track</span>
                <span class='mini-badge award'>View Awards</span>
              </div>
              <div>
                <span class='date'>SEPTEMBRE 2016 / JUIN 2018</span>
                <div class='row-txt'>
                  <span class='fst-txt'>Master en ingénierie Logiciels, </span>
                  <span class='snd-txt'>
                    Univesité Des Sciences et de LA Technologie Houari
                    Boumedienne USTHB
                  </span>
                </div>
                <span class='description'></span>
              </div>
              <div>
                <span class='date'>SEPTEMBRE 2012 / JUIN 2016</span>
                <div class='row-txt'>
                  <span class='fst-txt'>
                    Licence en Ingénierie des Systèmes d’Information et
                    Logiciels,{' '}
                  </span>
                  <span class='snd-txt'>
                    Univesité Des Sciences et de LA Technologie Houari
                    Boumedienne USTHB
                  </span>
                </div>
                <span class='description'></span>
              </div>
              <div>
                <span class='date'>JUIN 2012</span>
                <div class='row-txt'>
                  <span class='fst-txt'>
                    Baccalauréat série sciences expérimentales,{' '}
                  </span>
                  <span class='snd-txt'>Lycée MOHEMMED LABJAOUI</span>
                </div>
                <span class='description'>Mention : Bien</span>
              </div>
            </div>
          </div>
          <div class='experiences'>
            <div class='timeline-area'>
              <div>
                <span class='date'>MAI 2022 / AVRIL 2024</span>
                <div class='row-txt'>
                  <span class='fst-txt'>Web developer, </span>
                  <span class='snd-txt'>KPMG</span>
                </div>
                <span class='description'>
                  Développement front-end, conception d'API REST, méthodologie
                  Scrum, et utilisation des outils de gestion de version Git et
                  Microsoft Azure.
                </span>
              </div>
              <div>
                <span class='date'>DECEMBRE 2018 / FEVRIER 2022</span>
                <div class='row-txt'>
                  <span class='fst-txt'>
                    Ingénieure d'études et de Developement,{' '}
                  </span>
                  <span class='snd-txt'>Tamarisoft</span>
                </div>
                <span class='description'>
                  Développement front-end et back-end, conception d'API REST,
                  méthodologie Scrum, utilisation des outils de gestion de
                  version Git et GitLab, et développement de portails Liferay.
                </span>
              </div>
              <div>
                <span class='date'>NOVEMBRE 2018 / DECEMBRE 2018</span>
                <div class='row-txt'>
                  <span class='fst-txt'>Stage Pratique, </span>
                  <span class='snd-txt'>Tamarisoft Ex SSTI</span>
                </div>
                <span class='description'>
                  Initiation et développement de portails Liferay
                </span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div class='header'>
          <span class='big-title'>{t('skills')}</span>
        </div>
        <div class='container-icon'>
          <i class='fa-brands fa-angular fa-2xl'></i>
          <i class='fa-brands fa-html5 fa-2xl'></i>
          <i class='fa-brands fa-css3-alt fa-2xl'></i>
          <i class='fa-brands fa-java fa-2xl'></i>
          <i class='fa-brands fa-js-square fa-2xl'></i>
          <i class='fa-brands fa-php fa-2xl'></i>
          <i class='fa-brands fa-react fa-2xl'></i>
          <i class='fa-brands fa-figma fa-2xl'></i>
          <i class='fa-brands fa-git-alt fa-2xl'></i>
          <i class='fa-brands fa-github fa-2xl'></i>
          <i class='fa-brands fa-gitlab fa-2xl'></i>
          <i class='fa-brands fa-docker fa-2xl'></i>
        </div>
        <div>
          <span class='skills-category'>Front-end</span>
          <div>
            <span>HTML,</span>
            <span>CSS,</span>
            <span>Javascript</span>
          </div>
        </div>
        <div>
          <span class='skills-category'>Back-end</span>
          <div>
            <span>PHP,</span>
            <span>Java,</span>
            <span>Spring Boot,</span>
            <span>JHipster,</span>
            <span>Microservices,</span>
            <span>API Rest</span>
          </div>
        </div>
        {/* <div>
          <span class='skills-category'>Devops</span>
          <div>
            <span>Docker,</span>
            <span>Kubernetes,</span>
            <span>Jenkins</span>
          </div>
        </div> */}
        <div>
          <span class='skills-category'>Base De données</span>
          <div>
            <span>My SQL,</span>
            <span>PostgreSQL</span>
          </div>
        </div>
        <div>
          <span class='skills-category'>Autre</span>
          <div>
            <span>Figma,</span>
            <span>Scrum,</span>
            <span>Git,</span>
            <span>GitLab</span>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Experience
