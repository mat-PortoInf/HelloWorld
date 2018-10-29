/* Configurations */

// Container
var envs = {};

//Development (default)
envs.dev = {
    'httpPort' : 3000,
    'envName' : 'Development'
};

// Beta testing
envs.beta = {
    'httpPort' : 3001,
    'envName' : 'Beta Testing'
};

// Production
envs.prod = {
    'httpPort' : 3002,
    'envName' : 'Production'
};

// Set env based on cmd line args.
var currEnv = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLocaleLowerCase() : '';

// Check if env exists in envs container , else defaults to dev
var selectedEnv = typeof(envs[currEnv]) == 'object' ? envs[currEnv] : envs.dev;

// Exports module
module.exports = selectedEnv;