function Modal({ isOpen }: { isOpen: { data: boolean } }) {
    console.log(isOpen);

    return (
        <div>
            <div className='fixed w-full h-full bg-black opacity-45 z-10'></div>
            <div className='fixed z-20 bg-white top-[15%] left-[50%] translate-x-[-50%]  max-w-[600px] mx-auto p-[30px] rounded-2xl text-base/relaxed '>
                <p className='text-center text-[22px] mb-[15px] '>
                    Анкета удовлетворенности пациента качеством оказанных услуг{" "}
                </p>
                <p className='mb-[30px]'>
                    Уважаемый пациент! В целях совершенствования качества услуг
                    руководство клиники просит заполнить анкету. Анонимность
                    гарантируется. Необходимо указать выбранную Вами оценку по
                    10 балльной шкале, либо подчеркнуть, где необходимо. От 1 до
                    7 оценка считается неудовлетворительной. От 8 до 10
                    удовлетворительной. Заполненную анкету просим опустить в
                    ящик для сбора анкет
                </p>

                <div className='flex justify-center'>
                    <button
                        onClick={() => isOpen(false)}
                        className=' cursor-pointer bg-[#1BB394] text-white py-[8px] px-[25px] rounded-xl'>
                        Согласен
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
