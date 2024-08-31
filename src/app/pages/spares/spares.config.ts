import {IAdvantagesCard} from "../../core/interfaces/advantages-card.interface";
import {ITechnic} from "../../core/interfaces/technic.interface";
import {ISpare} from "../../core/interfaces/spare.interface";


export const ADVANTAGES_CARD : IAdvantagesCard[] = [
  {
    title: 'Скорость',
    description: 'Мы гарантируем оперативную обработку заказов и быструю доставку, чтобы вы могли начать использовать технику в кратчайшие сроки.',
    image: '/assets/icons/advantages/main-page__useful-services-3.svg'
  },
  {
    title: 'Качество',
    description: 'Наши продукты проходят строгий контроль, обеспечивая отличные эксплуатационные характеристики и долгий срок службы.',
    image: '/assets/icons/advantages/main-page__useful-services-5.svg'
  },
  {
    title: 'Лучшая цена',
    description: 'Наши предложения помогают вам сэкономить, не жертвуя надежностью и функциональностью.',
    image: '/assets/icons/advantages/saving-insurance_how-work-2.svg'
  },
  {
    title: 'Для всех',
    description: 'Наши продукты подходят как для небольших фермерских хозяйств, так и для крупных агропредприятий, обеспечивая надежность и эффективность в любых масштабах.',
    image: '/assets/icons/advantages/travel-russia-advantages-2.svg'
  }
]

export const SPARES_LIST: ISpare[] = [
  {
    type: 'Уборочная техника',
    image: '/spares/kosilka.png',
    name: 'Косилка',
    supplier: 'Tractors and co',
    compatibility: ['Ростсельмаш RSM', 'Кировец K7M 742', 'Кировец K7M 742', 'Кировец K7M 742'],
    state: 8,
    year: 2020,
    cost: 250000,
  },
  {
    type: 'Уход за посевами',
    image: '/spares/kultivator-blue.png',
    name: 'Культиватор',
    supplier: 'Tractors and co',
    compatibility: ['Ростсельмаш RSM', 'Кировец K7M 742', 'Кировец K7M 742', 'Кировец K7M 742'],
    state: 2,
    year: 2012,
    cost: 120000,
  },
  {
    type: 'Уход за посевами',
    image: '/spares/kultivator-green.png',
    name: 'Культиватор',
    supplier: 'Tractors and co',
    compatibility: ['Ростсельмаш RSM', 'Кировец K7M 742'],
    state: 7,
    year: 2016,
    cost: 240000,
  },
  {
    type: 'Обработка почвы',
    image: '/spares/plug.png',
    name: 'Плуг',
    supplier: 'Tractors and co',
    compatibility: ['Ростсельмаш RSM', 'Кировец K7M 742'],
    state: 4,
    year: 2015,
    cost: 100000,
  },
  {
    type: 'Обработка почвы',
    image: '/spares/borona.png',
    name: 'Борона',
    supplier: 'Tractors and co',
    compatibility: ['Ростсельмаш RSM', 'Кировец K7M 742'],
    state: 4,
    year: 2015,
    cost: 100000,
  },
  {
    type: 'Техника для полива',
    image: '/spares/opriskivatel.png',
    name: 'Опрыскиватель',
    supplier: 'Tractors and co',
    compatibility: ['Ростсельмаш RSM', 'Кировец K7M 742'],
    state: 4,
    year: 2015,
    cost: 100000,
  },
  {
    type: 'Расходники',
    image: '/spares/air-filter.png',
    name: 'Воздушный фильтр',
    supplier: 'Tractors and co',
    compatibility: ['Ростсельмаш RSM', 'Кировец K7M 742'],
    state: 4,
    year: 2015,
    cost: 100000,
  },
  {
    type: 'Расходники',
    image: '/spares/oil-filter.png',
    name: 'Фильтр для масла',
    supplier: 'Tractors and co',
    compatibility: ['Ростсельмаш RSM', 'Кировец K7M 742'],
    state: 4,
    year: 2015,
    cost: 5000,
  },
  {
    type: 'Прочее',
    image: '/spares/pokrishka.png',
    name: 'Покрышка',
    supplier: 'Tractors and co',
    compatibility: ['Ростсельмаш RSM', 'Кировец K7M 742'],
    state: 4,
    year: 2015,
    cost: 100000,
  },
  {
    type: 'Прочее',
    image: '/spares/disk.png',
    name: 'Диск',
    supplier: 'Tractors and co',
    compatibility: ['Ростсельмаш RSM', 'Кировец K7M 742'],
    state: 4,
    year: 2015,
    cost: 100000,
  },
  {
    type: 'Прочее',
    image: '/spares/protivoves.png',
    name: 'Противовес',
    supplier: 'Tractors and co',
    compatibility: ['Ростсельмаш RSM', 'Кировец K7M 742'],
    state: 4,
    year: 2015,
    cost: 100000,
  },
];
