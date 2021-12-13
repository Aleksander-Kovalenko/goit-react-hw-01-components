import css from '../Event/Event.module.css';
export const chipClassName = type => {
  switch (type) {
    case 'free':
      return css.x;
    case 'paid':
      return css.y;
    case 'vip':
      return css.z;
    default:
      throw new Error('Oops');
  }
};
