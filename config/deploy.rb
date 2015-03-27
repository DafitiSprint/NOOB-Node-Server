# config valid only for Capistrano 3.1
lock '3.2.1'

set :application, 'NOOB-node-server'
set :repo_url, 'https://github.com/DafitiSprint/NOOB-Node-Server.git'
set :branch, 'master'
set :main_js, "app/app.js"                           # default

#set :ssh_options, {
#  port: 80
#}

# Default branch is :master
# ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }.call

# Default deploy_to directory is /var/www/my_app
set :deploy_to, '/app/node-server'

# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
# set :log_level, :debug

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# set :linked_files, %w{config/database.yml}

# Default value for linked_dirs is []
# set :linked_dirs, %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5
namespace :deploy do
 
  #TODO: Add stop task in upstart
  desc "Stop Forever"
  task :started do
    on roles(:app) do
      execute "forever stopall" 
    end
  end
 
  desc 'Restart application'
  task :published do
    on roles(:app), in: :sequence, wait: 5 do
      # This assumes you are using upstart to startup your application 
      # - be sure that your upstart script runs as the 'deploy' user
      execute "forever start #{deploy_to}/current/app/app.js", raise_on_non_zero_exit: false
    end
  end
 
end