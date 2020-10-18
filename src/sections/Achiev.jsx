import React from 'react';
import CardAchiev from '../components/CardAchiev';
import '../style/sections/achiev.scss';
import imageOne from '../images/img5.jpg';
import imageTwo from '../images/img6.jpeg';
import imageThree from '../images/img7.jpg';

const Achiev = () =>{

    const achs = [
        {
            img:imageOne,
            date:"octubre 2018",
            titAch:"Donec consequat",
            txtAch:"Nulla sed convallis dolor, vel aliquet sem. Mauris malesuada dui risus, ac sollicitudin lorem euismod vitae."
        },
        {
            img:imageTwo,
            date:"marzo 2017",
            titAch:"Aliquam dignissim",
            txtAch:"Morbi tincidunt, ex vel malesuada laoreet, neque enim semper dolor, vel ultricies lacus."
        },
        {
            img:imageThree,
            date:"febrero 2015",
            titAch:"Ut auctor metus",
            txtAch:"Cras id magna vitae nisl laoreet blandit sed vitae mauris. In luctus metus lorem, in lobortis dui suscipit eu."
        }
    ]

    return(
        <section className="container-achiev">
            <h2 className="title-achiev">Logros</h2>
            <p className="text-achiev">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
            <div className="card-cntr-achiev">
                {achs.map( ach => {
                    return(
                        <CardAchiev img={ach.img} date={ach.date} titAch={ach.titAch} txtAch={ach.txtAch}/>
                    )
                })}
            </div>
        </section>
    )
}

export default Achiev;