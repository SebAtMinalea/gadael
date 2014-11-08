define(function() {

    'use strict';

    return function LoadRestListService(ResourceFactory, IngaResource) {
        
        
        function init(path) {
            
            path = 'rest/'+path;
            
            return {
                getFromUrl: function() {
                    
                    var ingaPath = path;
                    if ('/:id' === path.substr(path.length-4,4)) {
                        ingaPath = path.substr(0, path.length-4);
                    }

                    return IngaResource(ingaPath);
                },
                
                getResource: function() {
                    return ResourceFactory(path);
                }
            };
        }
        
        return {
            
            admin: {
                accountcollections      : init('admin/accountcollections/:id'),
                accountschedulecalendar : init('admin/accountschedulecalendar/:id'),
                beneficiaries           : init('admin/beneficiaries/:id'),
                calendars               : init('admin/calendars/:id'),
                collections             : init('admin/collections/:id'),
                departments             : init('admin/departments/:id'),
                rightrenewals           : init('admin/rightrenewals/:id'),
                rightrules              : init('admin/rightrules/:id'),
                rights                  : init('admin/rights/:id'),
                types                   : init('admin/types/:id'),
                users                   : init('admin/users/:id')
            },
            
            users: {
                
            }
        };
    }
});