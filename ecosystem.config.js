module.exports = {
  apps : [{
    name: "cf_license_manager",
    script:"serve -s build",
    max_memory_restart: "256M",
    env: {
      NODE_ENV: "development"
    },
    env_production: {
      NODE_ENV: "production"
    },
    env_staging: {
      NODE_ENV: "staging",
    },
  }]
};
