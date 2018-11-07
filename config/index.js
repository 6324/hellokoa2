import pro from './pro';
import dev from './dev';
module.exports = {
    pro:pro,
    dev:dev,
}[process.env.NODE_ENV||'dev']