import styles from "./JobStagesSection.module.css";

export const JobStagesSection = () => {
  return (
    <section
      className={styles.jobStagesSection}
      aria-labelledby="job-stages-title"
    >
      <div className={`container ${styles.container}`}>
        <header>
          <h2 className={styles.title} id="job-stages-title" data-aos="fade-up">
            Preparing of Success:
            <span>A Guide to Acing Your Job Interviews</span>
          </h2>
        </header>

        <div className={styles.stages}>
          <div className={`${styles.stage} ${styles.stageFirst}`}>
            <div
              className={styles.icon}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 45 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.58545 29.0121V38.0362C2.58545 38.5633 3.01273 38.9904 3.53973 38.9904H20.8288C20.6791 38.6713 20.595 38.3156 20.595 37.9404V29.0121H2.58545Z"
                  fill="white"
                />
                <path
                  d="M1.43142 27.5324H2.58524H20.5947V26.7101V25.545C20.5947 25.5341 20.5951 25.5233 20.5952 25.5124C20.6003 24.7863 20.7765 24.1 21.0855 23.4923C21.2189 23.2301 21.3769 22.9823 21.5566 22.7524C21.7703 22.4791 22.0145 22.2307 22.284 22.0125C23.0646 21.3804 24.0581 21.0011 25.1386 21.0011H26.2148V18.9345C26.2148 17.3673 24.9443 16.0968 23.3771 16.0968H20.8096C20.3084 16.0968 19.8731 16.4417 19.7585 16.9297L18.5651 22.0126L18.3913 22.7525L18.2683 23.2762C18.2511 23.3496 18.2308 23.4217 18.2076 23.4923H17.4164C17.4076 23.2447 17.3824 22.9976 17.3411 22.7524C17.334 22.7099 17.3265 22.6676 17.3184 22.6252L17.1597 22.0125L16.2259 18.4081L16.9712 16.7633C17.1127 16.451 16.8843 16.0968 16.5415 16.0968H14.9419C14.599 16.0968 14.3706 16.451 14.5121 16.7633L15.2574 18.4081L14.2882 22.0125L14.141 22.5602C14.1282 22.6241 14.1168 22.6882 14.1062 22.7524C14.0658 22.9977 14.0413 23.2447 14.0334 23.4923H13.2757C13.2526 23.4217 13.2323 23.3496 13.215 23.2762L13.092 22.7525L12.9183 22.0125L11.7248 16.9298C11.6103 16.4418 11.175 16.0969 10.6737 16.0969H8.10633C6.53912 16.0969 5.26864 17.3674 5.26864 18.9346V22.0128V22.7527V23.4925H1.43142C0.640895 23.4925 0 24.1334 0 24.924V26.1012C0 26.8916 0.640895 27.5324 1.43142 27.5324Z"
                  fill="white"
                />
                <path
                  d="M15.7418 14.5632C19.2592 14.5632 22.1106 11.7118 22.1106 8.1945V1.42516C22.1106 0.547649 21.3204 -0.118249 20.4555 0.0303326C18.5815 0.352259 14.3081 1.20505 11.6492 1.74155C10.325 2.0087 9.37305 3.1723 9.37305 4.52314V8.19454C9.37309 11.7119 12.2245 14.5632 15.7418 14.5632Z"
                  fill="white"
                />
                <path
                  d="M25.1385 22.4326C24.6449 22.4326 24.1784 22.548 23.7637 22.7524C23.3952 22.9342 23.0682 23.1867 22.7998 23.4923C22.3251 24.0327 22.0347 24.7385 22.0267 25.5124C22.0266 25.5233 22.0259 25.5341 22.0259 25.5451V26.7101V27.5324V28.2722V29.0121V37.9405C22.0259 38.5204 22.496 38.9904 23.0758 38.9904H39.0164H43.9499C44.5297 38.9904 44.9999 38.5204 44.9999 37.9405V25.5451C44.9999 24.039 43.93 22.7827 42.5088 22.4948C42.308 22.4541 42.1002 22.4326 41.8875 22.4326H26.2146H25.1385Z"
                  fill="white"
                />
                <path
                  d="M33.5132 20.7505C37.3711 20.7505 40.4986 17.623 40.4986 13.7652V9.73829C40.4986 8.25668 39.4543 6.98042 38.0021 6.68741C35.0856 6.099 30.3986 5.16366 28.3431 4.81053C28.2535 4.79512 28.1645 4.78772 28.077 4.78772C27.2385 4.78772 26.5278 5.46889 26.5278 6.34043V13.7652C26.5279 17.623 29.6553 20.7505 33.5132 20.7505Z"
                  fill="white"
                />
              </svg>
            </div>
            <p
              className={styles.stageDescription}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              The four stages of interviews include aptitude tests, group
              discussions, technical rounds, and HR rounds.
            </p>
          </div>
          <div className={`${styles.stage} ${styles.stageSecond}`}>
            <div
              className={styles.icon}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.1764 8.65796C21.1788 8.65796 20.3706 9.46611 20.3706 10.4631C20.3706 11.4608 21.1788 12.2689 22.1764 12.2689C22.403 12.2689 22.618 12.2237 22.8184 12.1461L27.1725 17.1812C27.0269 17.4416 26.9376 17.7375 26.9376 18.0561C26.9376 19.0537 27.7458 19.8619 28.7435 19.8619C29.7412 19.8619 30.5487 19.0537 30.5487 18.0561C30.5487 17.666 30.423 17.3076 30.2136 17.0131L31.981 14.4616C32.128 14.4993 32.279 14.5261 32.4376 14.5261C32.7103 14.5261 32.9663 14.4616 33.1991 14.353L37.1666 18.3205C37.0574 18.5532 36.9928 18.8086 36.9928 19.082C36.9928 20.0796 37.801 20.8878 38.7987 20.8878C39.7964 20.8878 40.6038 20.0796 40.6038 19.082C40.6038 18.0842 39.7964 17.2768 38.7987 17.2768C38.5247 17.2768 38.2693 17.3413 38.0372 17.4505L34.0691 13.4824C34.1782 13.2496 34.2428 12.9942 34.2428 12.7202C34.2428 11.7225 33.4353 10.915 32.4376 10.915C31.4393 10.915 30.6317 11.7225 30.6317 12.7202C30.6317 13.1095 30.7567 13.4679 30.9662 13.7625L29.1987 16.3154C29.0524 16.2776 28.9021 16.2509 28.7435 16.2509C28.5162 16.2509 28.302 16.2969 28.1015 16.3738L23.7461 11.3379C23.8917 11.0777 23.9809 10.7831 23.9809 10.4631C23.9809 9.46611 23.1734 8.65796 22.1764 8.65796Z"
                  fill="white"
                />
                <path
                  d="M7.19281 9.97418C10.3068 9.97418 10.9302 7.55446 10.9302 6.23479V4.95826C10.9302 3.6385 10.3067 1.21948 7.19281 1.21948C4.07955 1.21948 3.45605 3.6385 3.45605 4.95826V6.2347C3.45605 7.55446 4.07955 9.97418 7.19281 9.97418Z"
                  fill="white"
                />
                <path
                  d="M21.7969 16.1719L16.5749 18.731L13.7109 14.0626C12.8712 12.6934 11.7856 11.625 10.2447 11.625H7.89574H4.55177C2.03792 11.625 0 13.7845 0 16.448V30.3169H3.07758V45.0001H6.05549L7.89574 31.6228L9.7367 45.0001H12.7146V23.7855V20.2918L15.2346 23.2032L23.2031 18.2813L21.7969 16.1719Z"
                  fill="white"
                />
                <path
                  d="M45 4.21875V2.10938H43.5938H31.6406V0H28.8281V2.10938H16.875H15.4688V4.21875H16.875V16.5303L17.105 16.9052L18.2812 16.3291V4.21875H42.1875V25.3125H18.2812V22.9744L16.875 23.8431V25.3125H15.4688V27.4219H16.875H29.5532V32.9658L24.733 42.1689C24.0318 42.2396 23.4832 42.8247 23.4832 43.5443C23.4832 44.3119 24.1053 44.9341 24.873 44.9341C25.6407 44.9341 26.2629 44.312 26.2629 43.5443C26.2629 43.2497 26.1701 42.9777 26.0136 42.7533L29.5533 35.996V42.8906H30.9596V36.1643L34.4305 42.7903C34.2897 43.008 34.206 43.2662 34.206 43.5443C34.206 44.3119 34.8281 44.9341 35.5958 44.9341C36.3634 44.9341 36.9856 44.312 36.9856 43.5443C36.9856 42.8089 36.4129 42.2128 35.6899 42.1641L30.9597 33.1341V27.4219H43.5938H45V25.3125H43.5938V4.21875H45Z"
                  fill="white"
                />
              </svg>
            </div>
            <p
              className={styles.stageDescription}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              We offer lectures, weekly presentations, soft skill training, and
              mock interviews to help students perform well in these stages.
            </p>
          </div>
          <div className={`${styles.stage} ${styles.stageThird}`}>
            <div
              className={styles.icon}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 43 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.6123 0.699951C28.8062 0.699951 24.896 4.60977 24.896 9.4158C24.896 14.222 28.8062 18.1318 33.6123 18.1318C38.4183 18.1318 42.3281 14.222 42.3281 9.4158C42.3281 4.60985 38.4182 0.699951 33.6123 0.699951ZM33.6123 15.133C30.4609 15.133 27.8953 12.5681 27.8953 9.41589C27.8953 6.26387 30.4608 3.69895 33.6123 3.69895C36.7666 3.69895 39.3291 6.26387 39.3291 9.41589C39.3291 12.5682 36.7665 15.133 33.6123 15.133Z"
                  fill="white"
                />
                <path
                  d="M36.9008 9.97318L34.7981 9.09674C34.7275 8.83008 34.5754 8.60745 34.3646 8.44274V5.15678C34.3646 4.74237 34.0278 4.40698 33.6148 4.40698C33.199 4.40698 32.865 4.74237 32.865 5.15678V8.44213C32.5694 8.66985 32.3643 9.01263 32.3643 9.41587C32.3643 10.1057 32.9209 10.665 33.612 10.665C33.8403 10.665 34.0425 10.5881 34.2239 10.4827L36.3239 11.3568C36.4177 11.3964 36.5171 11.4148 36.6139 11.4148C36.9069 11.4148 37.185 11.2413 37.3049 10.9533C37.4631 10.5714 37.2845 10.1321 36.9008 9.97318Z"
                  fill="white"
                />
                <path
                  d="M15.117 28.1022C20.3565 28.1022 24.4217 22.2579 24.4217 17.2306C24.4217 12.0994 20.2452 7.92456 15.117 7.92456C9.98567 7.92456 5.81201 12.0994 5.81201 17.2306C5.81201 22.2579 9.8744 28.1022 15.117 28.1022ZM15.117 11.2589C18.4088 11.2589 21.0856 13.9373 21.0856 17.2307C21.0856 20.6229 18.3325 24.7679 15.117 24.7679C11.9012 24.7679 9.14535 20.6228 9.14535 17.2307C9.14535 13.9373 11.8221 11.2589 15.117 11.2589Z"
                  fill="white"
                />
                <path
                  d="M24.1871 23.7251C24.1989 23.8774 24.2163 24.0282 24.2163 24.1828C24.2163 26.9797 20.1044 33.2962 17.4101 37.1415L16.3031 31.719L17.6152 30.4061C17.6783 30.343 17.6783 30.2408 17.6153 30.1777L16.9779 29.5397C16.7258 29.2873 16.3835 29.1454 16.0268 29.1454H14.2029C13.8467 29.1454 13.5051 29.2867 13.253 29.5384L12.7269 30.0639C12.6664 30.1243 12.6323 30.2064 12.6323 30.292C12.6322 30.3776 12.6662 30.4597 12.7267 30.5203L13.9247 31.7191L12.8178 37.1416C10.1234 33.2954 6.01462 26.9797 6.01462 24.1829C6.01462 24.0284 6.03211 23.8775 6.04072 23.7252C2.83658 25.5577 0.672363 29.0027 0.672363 32.9585V40.0607C0.672363 42.4024 2.57036 44.2999 4.91326 44.2999H25.3178C27.6578 44.2999 29.5553 42.4023 29.5553 40.0607V32.9585C29.5553 29.0035 27.394 25.5585 24.1871 23.7251Z"
                  fill="white"
                />
              </svg>
            </div>
            <p
              className={styles.stageDescription}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Students complete mini and major projects and participate in group
              discussions to gain practical experience and improve skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};