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

    desc "START the servers"
        task :start, :roles => :app, :except => { :no_release => true } do
        run "cd #{deploy_to}/current/ && forever start #{main_js}"
    end
 
    desc "STOP the servers"
        task :stop, :roles => :app, :except => { :no_release => true } do
        run "cd #{deploy_to}/current/ && forever stop #{main_js}"
    end
 
    desc "RESTART the servers"
        task :restart, :roles => :app, :except => { :no_release => true } do
        run "cd #{deploy_to}/current/ && forever restart #{main_js}"
    end

end
task :tail do
   resp = capture "cd #{deploy_to}/current/ && forever logs | grep #{main_js}"
   log = resp.split(" ").last
   log.gsub!("\e[35m", "")
   log.gsub!("\e[39m", "")
   run "tail -f #{log}"
end

