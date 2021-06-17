import { series } from 'gulp';
import { clean } from './utils/clean';

export default series(

    // Cleaning 'src','svg','es','lib' before copying SVGs from 'EOS-Icons'
    clean(['src','svg','es','lib'])
);