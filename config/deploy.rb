# config valid only for Capistrano 3.1
lock '3.2.1'

set :application, 'NOOB-node-server'
set :repo_url, 'https://github.com/DafitiSprint/NOOB-Node-Server.git'
set :branch, 'master'

set :npm_target_path, -> { release_path } # default not set
set :npm_flags, '--production'           # default
set :npm_roles, :all   
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


  desc 'Restart application'
  task :restart do
    on roles(:web), in: :sequence, wait: 5 do
      within fetch(:latest_release_directory) do
        # Your restart mechanism here, for example:
        execute "forever restart #{main_js}"
      end
    end
  end


  desc 'Start application'
  task :start do
    on roles(:web), in: :sequence, wait: 5 do
      within fetch(:latest_release_directory) do
        # Your start mechanism here, for example:
        execute "forever start #{main_js}"
      end
    end
  end

  desc 'Stop application'
  task :stop do
    on roles(:web), in: :sequence, wait: 5 do
      within fetch(:latest_release_directory) do
        # Your stop mechanism here, for example:
        execute "forever stop #{main_js}"
      end
    end
  end

end

