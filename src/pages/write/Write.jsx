import './write.css';

export default function Write() {
    return (
        <div className='write'>
            <img src="https://images.pexels.com/photos/5232463/pexels-photo-5232463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="writeImg" />
            <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:"none"}} />
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Tell your Story...' className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    );
}
