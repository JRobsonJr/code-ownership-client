/* @flow */

import React from 'react';

import StudentList from './StudentList';

const students = [
    { name: "David", image: "https://i0.statig.com.br/bancodeimagens/ch/bu/d4/chbud42ufvllans0p7cnhmrzq.jpg" },
    { name: "Robson", image: "https://www.petlove.com.br/images/breeds/192469/profile/original/pug-p.jpg?1532539387" },
    { name: "Mariana", image: "https://http2.mlstatic.com/linda-pug-linda-filhote-de-pug-micro-vermifugada-e-com-prev-D_NQ_NP_778911-MLB20676737093_042016-F.jpg" },
    { name: "Matheus", image: "https://secure.img1-fg.wfcdn.com/im/57266972/resize-h800-w800%5Ecompr-r85/4307/43074449/Hanging+Pug+Puppy+Statue.jpg" }
];

const ProjectPage = () => (
    <div>
        <StudentList students={students} />
    </div>
);

export default ProjectPage;
