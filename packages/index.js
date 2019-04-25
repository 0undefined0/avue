import Carousel from './carousel/';
import Json from './json/'
import Crud from './crud/';
import Card from './card/'
import CrudCheckbox from './crud-checkbox/';
import CrudDate from './crud-date/';
import CrudTime from './crud-time/';
import CrudInput from './crud-input/';
import CrudRadio from './crud-radio/';
import CrudSelect from './crud-select/';
import CrudCascader from './crud-cascader/';
import CrudNumberInput from './crud-input-number/';
import CrudSwitch from './crud-switch/';
import CrudRate from './crud-rate/';
import CrudUpload from './crud-upload/';
import CrudIconSelect from './crud-icon-select/';
import CrudImg from './crud-img/';
import CrudSilder from './crud-silder/';
import DataDisplay from './data-display/';
import DataCard from './data-card/';
import DataTabs from './data-tabs/';
import DataProgress from './data-progress/';
import DataIcons from './data-icons/';
import DataBox from './data-box/';
import DataInfo from './data-info/';
import Form from './form/';
import Tabs from './tabs/';
import Steps from './steps/';
import Search from './search/';
import Tree from './tree/';
import FormDetail from './form-detail/';
import TableTree from './table-tree/';
import DateGroup from './date-group/';
import MultiSelect from "./multi-select/";
import MultiOption from "./multi-option/";
import { validatenull } from './utils/validate'
import directive from './directive/';
import axios from 'axios';
const components = [
    Json,
    Crud,
    Card,
    Form,
    Tabs,
    Tree,
    Carousel,
    Steps,
    FormDetail,
    CrudCheckbox,
    CrudDate,
    CrudTime,
    CrudInput,
    CrudRadio,
    CrudSelect,
    CrudCascader,
    CrudNumberInput,
    CrudSwitch,
    CrudRate,
    CrudUpload,
    CrudSilder,
    CrudImg,
    CrudIconSelect,
    DataInfo,
    DataProgress,
    DataDisplay,
    DataCard,
    DataIcons,
    DataTabs,
    DataBox,
    TableTree,
    DateGroup,
    Search,
    MultiSelect,
    MultiOption
];

function install(Vue, opts = {}) {
    if (axios || window.axios) Vue.prototype.$http = axios || window.axios;
    //初始化指令
    directive(Vue);
    Vue.prototype.validatenull = validatenull;
    components.map(component => {
        Vue.component(component.name, component);
    });
    Vue.prototype.$AVUE = {
        size: opts.size || 'medium',
        menuType: opts.menuType || 'button'
    };
}

if (window.Vue) {
    install(window.Vue, window.axios);
}
export default {
    install,
    Json,
    Crud,
    Card,
    Form,
    Tabs,
    Tree,
    Carousel,
    Steps,
    FormDetail,
    CrudCheckbox,
    CrudDate,
    CrudTime,
    CrudInput,
    CrudRadio,
    CrudSelect,
    CrudCascader,
    CrudNumberInput,
    CrudSwitch,
    CrudRate,
    CrudUpload,
    CrudSilder,
    CrudImg,
    CrudIconSelect,
    DataInfo,
    DataProgress,
    DataDisplay,
    DataCard,
    DataIcons,
    DataTabs,
    DataBox,
    TableTree,
    Search,
    DateGroup,
    MultiSelect,
    MultiOption
};