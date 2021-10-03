import React, { useContext } from 'react';
import './Content.css';
import  BtnToggle from '../BtnToggle/BtnToggle';
import { ThemeContext } from '../../Context/ThemeContext';

export default function Content() {

    const {theme} = useContext(ThemeContext);

    return (
        <div className="container">
            <BtnToggle />
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p className="content-txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusantium ipsam officia quisquam temporibus autem sit voluptatum amet nulla sapiente at fugit voluptates soluta laudantium nesciunt dicta ea eligendi consequatur dolores ab reprehenderit, enim blanditiis officiis. Quibusdam qui, iure voluptatem est ducimus natus cupiditate sed culpa quasi commodi nostrum sint assumenda ipsum, illo molestiae cumque delectus, nulla velit repellendus incidunt autem beatae? Cum tempore ullam excepturi quia porro nostrum, obcaecati iste aspernatur beatae voluptatibus hic vero vel quaerat. Voluptate sit itaque ut fugiat quae quod consectetur autem delectus numquam? Tenetur, maxime architecto, unde accusantium molestiae provident aspernatur itaque repellat nulla ad accusamus perferendis, reiciendis dolores aperiam reprehenderit. Quia illo temporibus dolorum animi voluptates suscipit? Alias quo autem dolor vitae? Voluptatum eum nesciunt necessitatibus placeat doloribus dolore deleniti nulla nostrum tempora ipsam illo quo iure dolorum, corporis perferendis, obcaecati ab laborum saepe non eaque, enim magni voluptatem ratione aut. Aut veniam eum accusamus quaerat amet, suscipit voluptatibus veritatis, similique voluptatum nam nulla in quidem maxime a quod doloremque velit esse quo illum ipsa laudantium dicta? Nam inventore dicta eligendi quas obcaecati sapiente, porro voluptatem, numquam aliquam culpa quidem vitae tempora blanditiis quisquam. Rerum ipsa minima excepturi veritatis, aspernatur quos deleniti in.
            </p>
        </div>
    );
};