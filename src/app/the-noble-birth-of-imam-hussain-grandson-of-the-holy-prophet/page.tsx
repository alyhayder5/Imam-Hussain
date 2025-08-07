import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

function Page() {
  return (
    <main>
      <Header />
      <section className="pt-[22vh] pb-32 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#F9A307] mb-4 leading-tight font-cement">
            The Noble Birth of Imam Hussain (ع)
          </h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </div>

        <article className="prose prose-lg max-w-none space-y-8 leading-relaxed">
          {/* Introduction Section */}
          <div className="bg-white rounded-2xl pl-6 sm:pl-8 p-8 shadow-sm border border-amber-100">
            <p className="text-md sm:text-xl sm:leading-8 text-gray-700">
              <span className="font-semibold text-amber-700 italic">
                There is a difference of opinion
              </span>{' '}
              among the Shi&apos;a and Sunni scholars, traditionists and
              historians regarding the day, month and year of the birth of{' '}
              <span className="font-bold text-amber-800">
                Imam Husayn (a.s.)
              </span>
              .
            </p>
          </div>

          {/* Different Opinions */}
          <div className="bg-amber-50 rounded-xl pl-5 sm:pl-6 p-6 border-l-4 border-amber-400">
            <p className="text-md sm:text-lg text-gray-700 sm:leading-7">
              Some opine that imam hussain was born on the{' '}
              <span className="font-bold text-amber-700">third</span> of the
              month of{' '}
              <span className="font-bold text-amber-700">Sha&apos;ban</span> or{' '}
              <span className="font-bold text-amber-700">fifth</span> of the
              same month, or on the fifth of the month of{' '}
              <span className="font-bold text-amber-700">
                Jamadi&apos; ul Ula
              </span>{' '}
              forth year after Migration (Hijrah), while some say that it was in
              the end of the month of{' '}
              <span className="font-bold text-amber-700">
                Rabi&apos; ul Ula
              </span>{' '}
              third year after Migration.
            </p>
          </div>

          {/* Scholarly Consensus */}
          <div className="bg-white rounded-xl pl-6 sm:pl-8 p-8 shadow-md border border-gray-200">
            <blockquote className="border-l-4 border-amber-500 pl-6 mb-6 leading-8">
              <p className="text-gray-600 mb-4 font-medium">
                Thus, <span className="font-bold">Shaikh Al-Tusi</span> in his{' '}
                <em className="text-amber-700">Tahzeeb</em>,{' '}
                <span className="font-bold">Shaikh Shaheed al Awwal</span> in
                his <em className="text-amber-700">Duroos</em>, and{' '}
                <span className="font-bold">Shaikh Bahai</span> in his{' '}
                <em className="text-amber-700">Tawzeehal Maqasid</em>{' '}
                unanimously agree and accept the tradition of{' '}
                <span className="font-bold">
                  Siqatul Islam (the Trustworthy Authority of Islam) Shaikh
                  Kulaini (May Allah sanctify his grave)
                </span>{' '}
                that{' '}
                <span className="font-bold">
                  Imam Ja&apos;far as Sadiq (a.s.)
                </span>{' '}
                said:
              </p>
              <div className="bg-amber-100 p-4 rounded-lg">
                <p className="italic font-semibold text-amber-800 text-lg leading-7">
                  &quot;The distance between (the birth of) Imam Hassan (a.s.)
                  and (the conception of) Imam Husayn (a.s.) was a Tuhr... while
                  between their birth six months and ten days.&quot;
                </p>
              </div>
            </blockquote>
          </div>

          {/* Explanation */}
          <div className="space-y-6">
            <p className="text-guru sm:text-lg text-white leading-8">
              What is meant here is the minimum period of cleanliness, which is
              of ten days.{' '}
              <span className="font-bold text-[#F9A307]">
                Imam Hassan (a.s.)
              </span>{' '}
              was born on the fifteenth of the month of{' '}
              <span className="font-semibold">Ramazan</span> in the year of the
              battle of <span className="font-semibold">Badr</span> i.e. second
              year of Migration (Hijrah).
            </p>

            <p className="text-guru sm:text-lg text-white leading-8">
              Besides, it is related that the distance between (the birth of)
              Imam Hassan (a.s.) and (the conception of) Imam Husayn (a.s.) was
              not a period of a Tuhr (cleanliness), and{' '}
              <span className="font-bold text-[#F9A307]">
                Imam Husayn (a.s.)
              </span>{' '}
              remained in his mother&apos;s womb for six months.
            </p>
          </div>

          {/* Divine Felicitations */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl pl-6 sm:pl-8 p-8 border border-amber-200">
            <p className="text-md sm:text-lg text-gray-700 leading-8 mb-4">
              It is written in the{' '}
              <em className="text-amber-700 font-medium">
                Manaqib of Ibn Shahr Ashob
              </em>{' '}
              from{' '}
              <em className="text-amber-700 font-medium">Kitab al Anwar</em>{' '}
              that Allah, the Exalted, sent felicitations to His Prophet
              <span className="font-bold"> Muhammad (S)</span> regarding the
              conception and birth of{' '}
              <span className="font-bold text-amber-800">
                Imam Husayn (a.s.)
              </span>{' '}
              while condoling him for his martyrdom. When Hazrat Fatima Zahra
              (a.s.) was informed about it, she was grieved, then the following
              verse was revealed,
            </p>

            <blockquote className="bg-amber-200 p-6 rounded-lg border-l-4 border-amber-600 my-6">
              <p className="italic text-amber-900 font-semibold text-lg">
                &quot;With trouble did his mother bear him and with trouble did
                she bring him forth, and the bearing and the weaning of him was
                thirty months&quot;{' '}
                <span className="text-sm font-normal">
                  (Sura al Ahqaf, 46:15)
                </span>
              </p>
            </blockquote>

            <p className="text-md sm:text-lg text-gray-700 sm:leading-8">
              Normally, a woman&apos;s pregnancy lasts nine months. No child
              born in six months could survive — except{' '}
              <span className="font-bold text-amber-800">
                Prophet Isa (a.s.)
              </span>{' '}
              and{' '}
              <span className="font-bold text-amber-800">
                Imam Husayn (a.s.)
              </span>
              .
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center py-8">
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>

          {/* Birth Narrative */}
          <div className="bg-white rounded-xl pl-6 sm:pl-8 p-8 shadow-md">
            <h3 className="text-2xl font-bold text-amber-800 mb-6 text-center font-mono">
              The Sacred Birth
            </h3>

            <p className="text-md sm:text-lg font-semibold text-gray-800 mb-4">
              <span className="font-bold text-amber-700">Shaikh Saduq</span>{' '}
              through his chain of transmitters, quotes from{' '}
              <span className="font-bold text-amber-700">
                Safiyyah bint Abdul Muttalib
              </span>
              , that she said:
            </p>

            <blockquote className="bg-amber-50 pl-4 sm:pl-6 p-6 rounded-lg border-l-4 border-amber-500 space-y-4">
              <p className="text-gray-700 leading-7">
                &quot;When{' '}
                <span className="font-bold text-amber-800">
                  Imam Husayn (a.s.)
                </span>{' '}
                was born, I was attending to his mother. The{' '}
                <span className="font-bold">Holy Prophet (S)</span> came to me
                and said:
              </p>
              <p className="italic text-amber-800 font-medium text-md sm:text-lg pl-3 sm:pl-4">
                &apos;O Aunt! Bring my son to me.&apos;
              </p>
              <p className="text-gray-700 leading-7">
                I replied that I had not yet purified him. He replied,
              </p>
              <p className="italic text-amber-800 font-medium text-md sm:text-lg pl-3 sm:pl-4">
                &apos;Will you purify him? Rather Allah, the Exalted, has
                cleansed and purified him.&apos;
              </p>
            </blockquote>
            <p className="sm:text-lg text-gray-700 leading-7 my-4 text-guru">
              In another tradition it is related that Safiyyah says that she
              then gave the child to the Prophet who placed his tongue in his
              mouth, and Imam Husayn (a.s.) started licking it. Safiyyah says
              that I strongly perceive that the Prophet did not give him
              anything else except milk and honey. She says that then the child
              urinated and the Prophet planted a kiss in the centre of his eyes
              and wept, then handing him over to me said,
            </p>

            <div className="mt-8 bg-gradient-to-r from-orange-50 to-amber-50 pl-4 sm:pl-6 p-6 rounded-lg">
              <p className="italic font-bold text-amber-800 text-lg sm:text-xl text-center py-4">
                &quot;O my dear son! May Allah curse the people who will kill
                you.&quot;
              </p>
              <p className="text-center text-gray-600 font-medium">
                — and repeated it thrice. I asked, &quot;May my parents be your
                ransom! Who will kill him&quot;? and he replied,
              </p>
              <p className="italic font-bold text-amber-800 text-lg sm:text-xl text-center py-4">
                &quot;The oppressive group to emerge from among the Bani
                Umayyah.&quot;
              </p>
            </div>
          </div>

          {/* Ritual Ceremonies */}
          <div className="bg-amber-50 rounded-xl pl-6 sm:pl-6 p-8 border border-amber-200">
            <h3 className="text-2xl font-bold text-amber-800 mb-6 font-mono text-center">
              Sacred Rituals
            </h3>

            <div className="space-y-6">
              <p className="text-md sm:text-lg text-gray-700 leading-7">
                It is related that the Prophet recited the{' '}
                <span className="font-bold text-amber-700">Azan</span> in the
                right ear and{' '}
                <span className="font-bold text-amber-700">Iqamah</span> in the
                left ear of{' '}
                <span className="font-bold text-amber-800">
                  Imam Husayn (a.s.)
                </span>
                . Imam Ali Zainul Abedeen (a.s.) relates that the Holy Prophet
                himself recited the Azaan in the ears of Imam Husayn (a.s.) the
                day he was born.
              </p>

              <div className="bg-white pl-4 sm:pl-6 p-6 rounded-lg shadow-sm">
                <p className="font-semibold text-amber-700 mb-2">
                  On the seventh day:
                </p>
                <p className="text-gray-700 leading-7">
                  The <span className="font-bold text-amber-700">Aqiqa</span>{' '}
                  was performed and two white charming sheep were sacrificed,
                  one thigh of which along with a gold Ashrafi (a gold coin) was
                  given to the mid-wife. The hair of the child was shaven off
                  and silver equal to it’s weight was given as charity, then
                  scent was applied on the child’s head.
                </p>
              </div>

              <div className="bg-gradient-to-r from-amber-100 to-orange-100 pl-4 sm:pl-6 p-6 rounded-lg">
                <p className="text-gray-700 leading-7">
                  <span className="font-bold">
                    The Trustworthy Authority of Islam Shaikh Kulaini
                  </span>{' '}
                  relates:{' '}
                  <span className="font-bold text-amber-800">
                    Imam Husayn (a.s.)
                  </span>{' '}
                  did not drink milk from his mother Hazrat Fatima (a.s.) nor
                  any other woman. He was always brought to the presence of the
                  Holy Prophet who gave him his thumb to suck. Imam Husayn
                  (a.s.) sucked his thumb and then would remain satiated for{' '}
                  <span className="font-semibold">2–3 days</span>. Thus Imam
                  Husayn (a.s.)’s flesh and blood was formed from the flesh and
                  blood of the Holy Prophet (S).
                </p>
              </div>
            </div>
          </div>

          {/* Angel Fitrus Story */}
          <div className="bg-white rounded-xl pl-6 sm:pl-8 p-8 shadow-lg border border-gray-200">
            <h2 className="text-2xxl font-bold text-amber-800 mb-8 text-center font-mono">
              Fitrus the Angel
            </h2>

            <div className="space-y-6">
              <p className="text-md sm:text-lg text-gray-700 leading-8">
                <span className="font-bold">
                  Shaikh Saduq (May Allah sanctify his grave)
                </span>{' '}
                quotes{' '}
                <span className="font-bold text-amber-800">
                  Imam Ja&apos;far as Sadiq (a.s.)
                </span>{' '}
                that when Imam Husayn (a.s.) was born, Allah commanded
                <span className="font-bold"> Jibra’eel</span> with 1000 Angels
                and congratulate the Prophet on His behalf and himself.
                Jibra’eel descended and on the way he passed by an island where
                an Angel named{' '}
                <span className="font-bold text-amber-700">Fitrus</span>, who
                was a bearer of the empyrean, lay there banished. Allah had once
                assigned a job to Fitrus who delayed it due to laziness; hence
                Allah took away his wings and expelled him to the island. Fitrus
                worshipped Allah there for{' '}
                <span className="font-semibold">700 years</span> until the time
                Imam Husayn (a.s.) was born. When Fitrus saw Jibra’eel he
                inquired of him as to where was he going. Jibra’eel answered
                that, “Allah, the Exalted, has bestowed His Blessings (Imam
                Husayn) upon Muhammad (S), thus Allah has commanded me to go and
                congratulate him on His behalf and myself.” Fitrus said,
              </p>

              <blockquote className="bg-amber-100 pl-4 sm:pl-6 p-6 rounded-lg border-l-4 border-amber-500">
                <p className="italic text-amber-800 font-medium text-guru sm:text-lg">
                  &quot;Then O Jibra’eel! Take me too along with you to the
                  presence of the Prophet, perhaps he might pray for me.”
                </p>
              </blockquote>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 pl-4 sm:pl-4 p-6 rounded-lg border border-green-200">
                <p className="text-gray-700 leading-8 mb-4">
                  Ji­bra’eel lifted him up and brought him to the Holy Prophet
                  (S). When he reached there he offered condolence to him on
                  behalf of Allah and him­self, then he presented the matter of
                  Fitrus. The Prophet commanded Fitrus to touch himself with the
                  body of{' '}
                  <span className="font-bold text-amber-800">
                    Imam Husayn (a.s.)
                  </span>
                  . When he did,{' '}
                  <span className="font-bold text-green-700">
                    his wings returned
                  </span>
                  .
                </p>

                <p className="italic font-bold text-amber-800 text-guru sm:text-lg mb-4 text-center">
                  “O Prophet of Allah! This son of yours will be mercilessly
                  killed by your nation. Therefore it is incumbent upon me in
                  exchange of this favor that I recompense. Hence there is no
                  person who visits his grave except that I receive him, and
                  there is no Muslim who offers salutations to him or who prays
                  for him except that I take it to his presence and carry his
                  message.”
                </p>

                <p className="text-gray-700 leading-8">
                  Saying this Fitrus flew away. In another narrative it is
                  related that Fitrus flew away saying,
                </p>
                <blockquote className="italic text-amber-700 font-medium text-md sm:text-lg mt-4 pl-3 sm:pl-4 border-l-4 border-amber-400 rounded-md">
                  &quot;Who is similar to me? For I am a freed one of Husayn
                  (a.s.), the son of Ali (a.s.) and Fatima (a.s.), whose
                  Grandfather is Ahmad (S).&quot;
                </blockquote>
              </div>
            </div>
          </div>

          {/* Final Section */}
          <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 rounded-xl pl-6 sm:pl-8 p-8 border-2 border-amber-300">
            <p className="text-md sm:text-lg text-gray-700 leading-8 mb-6">
              <span className="font-bold">Shaikh Al-Tusi</span> relates in
              misbah that Qasim bin Abul Ala’a Hamadani (the agent of Imam Ali
              an Naqi) received a written pronouncement from{' '}
              <span className="font-bold text-amber-800">
                Imam al-Mahdi (a.t.f.s.)
              </span>{' '}
              which read as follows:
            </p>

            <blockquote className="bg-white p-6 rounded-lg shadow-sm border border-amber-200 mb-6">
              <p className="italic text-amber-800 font-medium text-lg leading-8">
                &quot;Our Master{' '}
                <span className="font-bold">Imam Husayn bin Ali (a.s.)</span>{' '}
                was born on Thursday, the third of Sha&apos;ban, therefore fast
                on that day and recite this supplication: “O Allah! I ask you in
                the name of the one who is born this day…(till the end)”
              </p>
            </blockquote>

            <p className="text-md sm:text-lg text-gray-700 leading-8 mb-6">
              <span className="font-bold">Sayyid ibn Tawoos</span> says in
              Malhoof that there was no Angel in the Heavens who did not turn up
              to congratulate the Prophet (S) on the birth of Imam Husayn (a.s.)
              and condole him for his martyrdom, and revealed the reward
              reserved for the Imam. They showed him the grave of Imam Husayn
              (a.s.), and the Prophet prayed,
            </p>

            <div className="bg-amber-200 pl-4 sm:pl-4 p-6 rounded-lg text-center">
              <blockquote className="italic font-bold text-amber-900 text-lg sm:text-xl leading-8">
                &quot;O Allah! Forsake him who forsakes Husayn, and slay him who
                slays Husayn, and do not bestow abundance to the one who wishes
                to derive advantage from his death.&quot;
              </blockquote>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </main>
  );
}

export default Page;
