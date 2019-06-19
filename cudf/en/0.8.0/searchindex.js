Search.setIndex({docnames:["10min","10min_dask_cudf","api","dask-cudf","dask-xgb-10min","developer","index"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,nbsphinx:1,sphinx:56},filenames:["10min.ipynb","10min_dask_cudf.ipynb","api.rst","dask-cudf.md","dask-xgb-10min.ipynb","developer.rst","index.rst"],objects:{"cudf.comm.gpuarrow":{GpuArrowReader:[2,0,1,""]},"cudf.comm.gpuarrow.GpuArrowReader":{to_dict:[2,1,1,""]},"cudf.dataframe":{DataFrame:[2,0,1,""]},"cudf.dataframe.DataFrame":{add_column:[2,2,1,""],apply_chunks:[2,2,1,""],apply_rows:[2,2,1,""],as_gpu_matrix:[2,2,1,""],as_matrix:[2,2,1,""],assign:[2,2,1,""],columns:[2,2,1,""],copy:[2,2,1,""],describe:[2,2,1,""],drop:[2,2,1,""],drop_column:[2,2,1,""],drop_duplicates:[2,2,1,""],dtypes:[2,2,1,""],fillna:[2,2,1,""],from_arrow:[2,2,1,""],from_gpu_matrix:[2,2,1,""],from_pandas:[2,2,1,""],from_records:[2,2,1,""],groupby:[2,2,1,""],hash_columns:[2,2,1,""],head:[2,2,1,""],iloc:[2,2,1,""],index:[2,2,1,""],iteritems:[2,2,1,""],join:[2,2,1,""],label_encoding:[2,2,1,""],loc:[2,2,1,""],mean:[2,2,1,""],melt:[2,2,1,""],merge:[2,2,1,""],ndim:[2,2,1,""],nlargest:[2,2,1,""],nsmallest:[2,2,1,""],one_hot_encoding:[2,2,1,""],partition_by_hash:[2,2,1,""],pop:[2,2,1,""],quantile:[2,2,1,""],query:[2,2,1,""],rename:[2,2,1,""],replace:[2,2,1,""],rolling:[2,2,1,""],select_dtypes:[2,2,1,""],set_index:[2,2,1,""],shape:[2,2,1,""],sort_index:[2,2,1,""],sort_values:[2,2,1,""],tail:[2,2,1,""],to_arrow:[2,2,1,""],to_csv:[2,2,1,""],to_dlpack:[2,2,1,""],to_feather:[2,2,1,""],to_gpu_matrix:[2,2,1,""],to_hdf:[2,2,1,""],to_json:[2,2,1,""],to_pandas:[2,2,1,""],to_parquet:[2,2,1,""],to_records:[2,2,1,""],to_string:[2,2,1,""],transpose:[2,2,1,""]},"cudf.dataframe.series":{Series:[2,0,1,""]},"cudf.dataframe.series.Series":{"var":[2,2,1,""],abs:[2,2,1,""],add:[2,2,1,""],all:[2,2,1,""],any:[2,2,1,""],append:[2,2,1,""],applymap:[2,2,1,""],argsort:[2,2,1,""],as_mask:[2,2,1,""],astype:[2,2,1,""],ceil:[2,2,1,""],count:[2,2,1,""],cummax:[2,2,1,""],cummin:[2,2,1,""],cumprod:[2,2,1,""],cumsum:[2,2,1,""],data:[2,2,1,""],describe:[2,2,1,""],diff:[2,2,1,""],digitize:[2,2,1,""],dropna:[2,2,1,""],dtype:[2,2,1,""],eq:[2,2,1,""],factorize:[2,2,1,""],fillna:[2,2,1,""],find_first_value:[2,2,1,""],find_last_value:[2,2,1,""],floor:[2,2,1,""],floordiv:[2,2,1,""],from_categorical:[2,2,1,""],from_masked_array:[2,2,1,""],ge:[2,2,1,""],gt:[2,2,1,""],has_null_mask:[2,2,1,""],hash_encode:[2,2,1,""],hash_values:[2,2,1,""],iloc:[2,2,1,""],index:[2,2,1,""],isna:[2,2,1,""],isnull:[2,2,1,""],label_encoding:[2,2,1,""],le:[2,2,1,""],lt:[2,2,1,""],masked_assign:[2,2,1,""],max:[2,2,1,""],mean:[2,2,1,""],mean_var:[2,2,1,""],min:[2,2,1,""],mod:[2,2,1,""],mul:[2,2,1,""],ndim:[2,2,1,""],ne:[2,2,1,""],nlargest:[2,2,1,""],notna:[2,2,1,""],nsmallest:[2,2,1,""],null_count:[2,2,1,""],nullmask:[2,2,1,""],nunique:[2,2,1,""],one_hot_encoding:[2,2,1,""],pow:[2,2,1,""],product:[2,2,1,""],quantile:[2,2,1,""],radd:[2,2,1,""],rename:[2,2,1,""],replace:[2,2,1,""],reset_index:[2,2,1,""],reverse:[2,2,1,""],rfloordiv:[2,2,1,""],rmod:[2,2,1,""],rmul:[2,2,1,""],rolling:[2,2,1,""],round:[2,2,1,""],rpow:[2,2,1,""],rsub:[2,2,1,""],rtruediv:[2,2,1,""],scale:[2,2,1,""],set_index:[2,2,1,""],set_mask:[2,2,1,""],shape:[2,2,1,""],shift:[2,2,1,""],sort_index:[2,2,1,""],sort_values:[2,2,1,""],std:[2,2,1,""],sub:[2,2,1,""],sum:[2,2,1,""],tail:[2,2,1,""],take:[2,2,1,""],to_array:[2,2,1,""],to_dlpack:[2,2,1,""],to_frame:[2,2,1,""],to_gpu_array:[2,2,1,""],to_hdf:[2,2,1,""],to_json:[2,2,1,""],to_string:[2,2,1,""],truediv:[2,2,1,""],unique:[2,2,1,""],valid_count:[2,2,1,""],value_counts:[2,2,1,""],values_to_string:[2,2,1,""]},"cudf.groupby.groupby":{Groupby:[2,0,1,""]},"cudf.groupby.groupby.Groupby":{agg:[2,2,1,""]},"cudf.groupby.legacy_groupby.Groupby":{"var":[2,2,1,""],apply:[2,2,1,""],apply_grouped:[2,2,1,""],as_df:[2,2,1,""],std:[2,2,1,""],sum_of_squares:[2,2,1,""]},"cudf.io":{csv:[2,3,0,"-"],feather:[2,3,0,"-"],hdf:[2,3,0,"-"],json:[2,3,0,"-"],orc:[2,3,0,"-"],parquet:[2,3,0,"-"]},"cudf.io.csv":{read_csv:[2,4,1,""],to_csv:[2,4,1,""]},"cudf.io.feather":{read_feather:[2,4,1,""],to_feather:[2,4,1,""]},"cudf.io.hdf":{read_hdf:[2,4,1,""],to_hdf:[2,4,1,""]},"cudf.io.json":{read_json:[2,4,1,""],to_json:[2,4,1,""]},"cudf.io.orc":{read_orc:[2,4,1,""],read_orc_metadata:[2,4,1,""]},"cudf.io.parquet":{read_parquet:[2,4,1,""],read_parquet_metadata:[2,4,1,""],to_parquet:[2,4,1,""]},"cudf.multi":{concat:[2,4,1,""]},"cudf.reshape":{general:[2,3,0,"-"]},"cudf.reshape.general":{melt:[2,4,1,""]},cudf:{multi:[2,3,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","module","Python module"],"4":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:attribute","2":"py:method","3":"py:module","4":"py:function"},terms:{"01t09":2,"07t12":2,"08t00":2,"13t12":2,"14t12":2,"15t18":2,"18th":2,"1st":2,"20t00":[0,1],"21t00":[0,1],"22t00":[0,1],"23t00":[0,1],"25th":2,"3rd":2,"50th":2,"72706b163a0d4feb949005d22146ad83":1,"75th":2,"boolean":2,"byte":2,"char":2,"class":[2,3],"default":2,"final":4,"float":[0,1,2],"function":[0,1,2,4,5],"import":[0,1,2,6],"int":2,"long":2,"new":[0,1,2,3,4],"null":[0,1,2],"return":[0,1,2,4],"short":[0,1],"throw":2,"true":[0,1,2,3],"try":2,"var":[0,1,2],"while":2,For:[0,1,2,3],Its:2,Not:2,One:2,The:[2,3,4],These:[2,4,5],Use:[2,3,4],Uses:2,Using:[1,2,4],Will:2,With:[1,2,3],__fspath__:2,__index_level_0__:1,__setitem__:2,_at:2,_path:2,_time:2,aaba:1,abc:2,abl:3,abov:3,abs:2,absolut:2,acceler:1,accept:2,access:[0,1,2],accessor:[3,4],accommod:2,aco:2,acquir:4,across:[1,3],activ:4,adapt:1,add:2,add_column:2,add_ten:[0,1],added:2,addit:2,addition:[3,4],address:4,advanc:3,advertis:3,after:[0,1,2],agg:[0,1,2,3],agg_col1:[0,1],agg_col2:[0,1],aggreg:[1,2,3,4,5],aggregation_columnnam:2,algorithm:2,alia:2,all:[1,2,3,4,5],alloc:2,allow:[0,1,2],along:2,alreadi:[2,3],also:[1,2],alter:2,altern:2,altogeth:2,alwai:2,ame:1,analyz:1,andas_typ:1,ani:[2,3],anoth:[0,1,2],apach:1,api:[0,1,4,6],apolog:3,appear:2,append:2,appli:[0,1,2,5],applic:2,apply_chunk:2,apply_group:2,apply_multicolumn:2,apply_multicolumn_map:2,apply_multiindex_or_single_index:2,apply_row:2,applymap:2,applyutil:5,approxim:2,arang:[0,2],arbitrari:2,aren:2,arg:2,argsort:2,argument:2,arrai:[0,1,2],arrow:5,as_df:2,as_gpu_matrix:2,as_index:2,as_mask:2,as_matrix:[1,2],ascend:[0,2],ascii:2,asin:2,assert:0,assertionerror:0,assign:[2,3,4],associ:4,assum:2,astyp:[0,1,2],atan:2,attempt:[0,2],attribut:[1,2],auto:2,automat:[1,2],avail:[1,2,4],averag:2,avg:2,avoid:2,axes:2,axi:[1,2,4],baca:1,back:1,balanc:4,base:[0,1,2],basic:5,batch:2,becaus:[2,3],been:[3,4],befor:[2,4],begin:2,behav:2,behavior:2,behaviour:2,belong:2,below:[1,2],best:1,better:5,between:[2,3,4],bin:2,binari:2,bird:2,bit:2,bitmask:2,block:2,blockdim:2,blosc:2,blosclz:2,bool:2,boolbit:0,boolean1:1,boolmask:0,boost:4,booster:4,borrow:[0,1],both:[2,3],bottom:2,bound:2,brotli:2,bst:4,buffer:[2,5],build:[2,4],built:1,builtin:2,bye:1,byte1:1,byte_rang:2,bytes1:1,bz2:2,bzip2:2,caba:1,cache_kei:2,calcul:[0,1,2],call:[0,1,2,4],callabl:2,can:[0,1,2,3,4],cannot:2,cast:2,cat:[0,1,2],categor:[2,5],categori:[0,1,2,3],caus:0,ceil:2,center:2,certain:2,certainli:3,chang:2,chani:1,charact:2,cheatsheet:[0,1],check:2,checksum:2,chunk:2,chunksiz:2,classmethod:2,cleaner:4,client:4,close:2,cluster:[3,6],cmd:4,code:[0,1,2,6],cohes:3,col:2,col_level:2,collaps:2,column:[0,1,2,3,4,5],column_index:1,column_nam:2,columnar:1,columnop:5,combin:[0,1,2],comfort:1,comm:2,command:4,comment:2,common:2,commun:4,compact_mask_byt:0,compat:2,compil:2,complevel:2,complib:2,compon:2,comprehens:3,compress:2,compressor:2,comput:[1,2,3,6],concat:[2,4],concaten:[0,1,2,4],concurr:2,conda:[1,4],condit:[0,1,2],configur:2,conflict:2,consecut:2,consid:[0,2],construct:4,consum:4,contain:[0,2,4,5],content:[2,6],control:2,convers:2,convert:[2,3],convert_ax:2,convert_d:2,coordin:4,copi:2,core:[2,4],correct:2,correpond:2,correspond:2,cos:2,could:2,count:[0,1,2,3],cpu:[1,3],creat:[0,1,2,3],criteria:2,criterion:2,csv:2,cuda:[2,4,5],cudautil:[0,5],cudf:[2,5],cudf_compar:1,cudf_df:3,cudf_obj:2,cudf_val:2,cummax:2,cummin:2,cumprod:2,cumsum:2,cumul:2,current:[1,2,3,5],custom:3,dashboard:4,dask:[5,6],dask_cuda:4,dask_cudf:[1,3,4],dask_cudf_compar:1,dask_df:1,dask_gdf:1,data:[2,3,4],data_column:2,databas:2,datafram:[0,1,3,4,5,6],dataset:[1,2,6],date:[0,1,2,3],date_ddf:1,date_df:[0,1],date_format:2,date_rang:[0,1],date_unit:2,datelik:2,datetim:[0,1,2],datetime64:2,dayfirst:2,dayofweek:3,ddf:[1,4],ddf_a:1,ddf_b:1,ddof:2,decent:3,decid:5,decim:2,decod:[2,4],decompress:2,deep:2,deepcopi:2,def:[0,1,2],default_handl:2,defin:[1,2,5,6],delet:2,delim_whitespac:2,delimit:[0,2],delimt:2,dens:2,depend:2,deploi:4,deprec:2,descend:2,describ:2,descript:[0,1],deseri:2,design:3,desir:2,detect:2,determin:2,develop:6,deviat:[2,3],devic:2,df2:1,df_a:[0,1,2],df_b:[0,1,2],df_group:2,df_merg:[0,2],df_new:2,dgdf:1,dict:2,dictionari:2,diff:2,differ:[2,4],difficult:3,digit:2,dimens:2,dimension:2,direct:[0,1,2],directli:[0,1,2,5],directori:[1,2,5],disabl:[2,6],discard:2,discuss:1,disk:2,distribut:[1,4],divis:2,dlpack:2,dmlc:[2,4],doc:2,docstr:5,doctest:2,document:[0,1,2],docutil:5,doe:[0,2],dog:[1,2],don:[0,2,3],doubl:2,double1:1,double_precis:2,doublequot:2,downward:2,drop:2,drop_column:2,drop_dupl:2,dropna:2,ds2:1,dts:2,dtype:[0,1,2],due:[2,3],duplic:2,dure:2,each:[0,1,2,4],easi:3,edg:2,effect:3,effici:2,either:[1,2],element:[0,1,2,3],elemenwis:2,els:[0,1,2],empti:2,emul:2,enabl:[2,4],encapsul:2,encod:[1,2,4],encourag:3,end:2,engin:2,enough:[1,2,3],ensur:[2,4],entir:4,entri:2,enumer:2,env:[1,4],environ:4,epoch:2,equal:2,equival:[0,1,2],error:[0,2,4],even:2,everi:2,everyth:2,exact:2,exampl:2,example_fil:1,example_output:1,except:[0,2],exclud:2,execut:2,exist:[0,1,2],exp:2,expand:2,expect:[2,3],expens:3,explicitli:2,exponenti:2,expr:2,express:2,extens:2,extra:2,extract:2,factor:2,fals:[0,1,2],false_valu:2,far:2,fast:[1,2,3],faster:[2,5],feather:2,featur:[2,5],field:2,field_nam:1,file:[0,1,2,5],filenam:2,filepath_or_buff:2,fill:[0,2],fill_valu:2,fillna:[0,1,2,3],filter:[0,1,2],find_first_valu:2,find_last_valu:2,first:[0,1,2],fish:2,fit:1,fix:[2,3],flat:5,fletcher32:2,flexibl:[1,2],float1:1,float32:2,float64:[0,2],floor:2,floordiv:2,fly:2,fname:2,follow:[2,3],foo:[0,1,2],foo_dask:1,forc:2,force_ascii:2,forceindex:2,fork:4,form:[2,3],format:[1,2,3,5],fortran:2,found:2,frame:2,freq:[0,1,2],from:[0,1,2,3,4],from_arrai:2,from_arrow:2,from_batch:2,from_categor:2,from_cudf:1,from_dask_datafram:[1,4],from_gpu_matrix:2,from_masked_arrai:2,from_panda:[0,1,2,3,4],from_record:2,from_tupl:1,frustrat:3,ftp:2,full:[1,2,3],func:2,futur:[1,2],garbag:2,gcs:2,gdf1:1,gdf2:1,gdf:[0,1,2,4],gear:[0,1],gener:[2,3,5],get:2,ghi:2,give:2,given:2,global:2,good:2,govern:2,gpu:[0,1,2,4,5,6],gpu_hist:4,gpuarrow:[2,5],gpuarrowread:6,grade:[0,1],greater:2,group:[2,3],group_kei:2,groupbi:[0,1,3,5,6],grow_polici:4,guid:2,gzip:2,handl:[0,2],handler:2,has:[3,4],has_null_mask:2,hash:2,hash_column:2,hash_encod:2,hash_valu:2,have:[1,2,4],hdf5:2,hdf:2,hdfstore:2,head:[0,1,2],header:2,helper:5,here:5,hierarch:[0,1,2],higher:2,hold:2,hood:1,host:[0,1,2,4],hostnam:4,hot:2,how:[0,1,2],html:2,http:[2,4],id_var:2,identifi:2,ids:2,idx:[1,2],ignor:2,ignore_index:[0,2],iloc:[1,2],implement:[1,2,3,5],improv:2,in1:2,in2:2,in3:2,includ:[0,1,2],incol:2,inconsist:3,incorrect:2,increas:2,independ:2,index:[2,3,5,6],index_col:2,index_column:1,indic:[0,2,5],individu:2,ineffici:2,infer:2,inferenc:4,inform:[1,2],ingest:3,initi:[1,2,6],inner:2,inplac:2,input:2,insert:2,insid:2,instanc:[2,4],instanti:4,instead:2,int1:1,int32:2,int64:[0,1,2],int8:1,integ:[0,1,2],integr:2,interact:[0,1],intermedi:2,interpol:2,interpret:2,intersect:2,interv:2,introduct:[0,1],invalid:2,invok:2,ipaddr:4,isna:2,isnul:2,iso8601:2,iso:2,issu:[2,3],item:2,iter:2,iteritem:2,its:[2,4,5],itself:2,jit:[2,5],join:[2,3],json:2,jsonread:2,just:2,keep:2,keep_default_d:2,keep_default_na:2,kei:[0,1,2],kernel:[2,5],keyword:[1,2,4],kind:2,kwarg1:2,kwarg2:2,kwarg:2,label:[2,4],label_encod:2,lack:2,lambda:3,larg:3,largest:2,last:[0,2],launch:4,lead:3,least:2,leav:[2,4],left:[0,1,2,3],left_index:[2,3],left_on:2,len:[0,1,2],length:2,less:2,level:[1,2],leverag:4,lexicograph:2,lib:[1,4],libgdf:[2,6],librari:[2,3,6],lies:2,lightweight:4,like:[0,1,2,3,4],limit:2,line:[2,4],line_termin:2,linear:[2,3],linetermin:2,list:[0,1,2,3,4],load:[1,2,4],loc:[0,1,2,3],local:[1,2,4],local_dict:[1,2],localcudaclust:4,localhost:2,localpath:2,locat:2,log:2,logic:[0,1,5],logical_and:2,logical_not:2,logical_or:2,long1:1,look:3,loop:2,lossguid:4,lot:5,lower:[1,2],lsuffix:2,lz4:2,lz4hc:2,lzo:2,machin:3,mai:[1,2,4],mainli:[0,1],maintain:1,major:2,make:[1,2,5],mangle_dupe_col:2,mani:[1,3],manipul:1,manner:2,map:[1,5],map_partit:[1,3],mapper:2,mark:2,mask:2,masked_assign:2,match:2,matrix:2,mauddib:1,max:[0,1,2,3],max_a:0,max_depth:4,max_leav:4,maximum:2,mean:[0,1,2,3,4],mean_b:0,mean_var:2,median:2,melt:2,memori:[1,2,4],mention:3,merg:[1,2,3],met:[0,1],metadat:1,metadata:[1,2],method:[2,3],metric:6,microsecond:2,middl:1,midpoint:2,might:0,millisecond:2,min:2,min_period:2,minim:2,minimum:2,minut:6,mislead:3,miss:2,mix:2,mkdir:1,mod:2,mode:2,model:[0,1,6],modifi:2,modul:6,modulo:2,monoton:2,more:[0,1,2],most:[0,2,3],move:[2,4,6],mul:2,mult:2,mult_add:2,multi:[2,4,5,6],multiindex:2,multipl:[1,2,3,5],must:[1,2,4],n_gpu:4,na_filt:2,na_posit:2,na_rep:2,na_sentinel:2,na_valu:2,name:[0,1,2,4],name_seri:2,namedtupl:2,nan:2,nan_as_nul:2,nanosecond:2,navig:6,nccl:6,nccl_p2p_disabl:4,ncol:2,ndarrai:[0,1,2],ndim:2,nearest:2,necessari:6,need:2,nelem:2,newer:3,nlargest:2,node:4,non:2,none:[0,1,2],nor:2,normal:4,note:[1,2,4],notna:2,notset:2,novemb:0,now:[1,2],npart:2,npartit:[1,3,4],nrow:2,nsmallest:2,nul:1,null_count:[0,2],nullmask:2,num1:2,num:[0,1],num_boost_round:4,num_round:4,num_row:2,num_row_group:2,numba:[2,5],number:[0,1,2,4],numer:[0,2,5],numeric_onli:2,numericalcolumn:0,numpi:[2,4],numpy_typ:1,nunber:2,nuniqu:2,obj:2,object:[2,3,4],observ:[0,1,2],occurr:[0,1,2],offset:2,often:3,omit:2,onc:[1,2],one:2,one_hot_encod:2,onli:[1,2,3,6],open:2,oper:[2,3,5],oppos:2,optim:4,option:[2,4],orc:2,orchestr:3,order:[1,2],ordereddict:1,org:2,organ:6,orient:2,origin:[2,3],other:[2,3,5],otherwis:[1,2],out1:2,out2:2,out:2,out_dtyp:2,outcol:2,outer:2,output:[2,3,4,5],output_fram:2,outsid:2,over:[2,4],overhead:2,overlap:2,overrid:2,overwit:2,ownership:4,p2p:6,packag:[1,3,4],page:6,pair:2,panda:[2,3,4],pandas_t:1,pandas_typ:1,paradigm:[0,1],parallel:[1,2,3],param:4,paramet:[2,6],parquet:[2,3],pars:2,parser:2,part:2,particular:2,partit:[1,2],partition_by_hash:2,partition_col:2,pass:[1,2,4],path:[1,2],path_or_buf:2,pathlib:2,pd_result:2,pdf:[0,1,2,4],per:2,percentil:2,perform:[0,1,2,4,5],period:[0,1,2],persist:[3,4],pet_cod:2,pet_dummi:2,pet_dummy_0:2,pet_dummy_1:2,pet_dummy_2:2,pet_own:2,pet_typ:2,pipe:4,place:2,pleas:[1,2,4],point:2,pointer:2,pop:2,popen:4,portion:[0,1],posit:2,possibl:[2,5],post:1,postfix:2,pow:2,power:2,practic:1,precis:2,precise_float:2,pred:4,predict:6,prefix:2,prefix_sep:2,preserv:2,preserve_index:2,print:[0,1,2,4],process:[1,4],produc:[1,2,4],product:2,progress:1,project:3,promot:2,proper:2,properli:0,properti:[1,2],protocol:2,provid:[1,2],purpos:1,put:2,py3:2,pyarrow:[0,1,2],pycapsul:2,pycapsule_obj:2,pydata:2,pytabl:2,python3:[1,4],python:[1,2,4],quant_index:2,quantil:2,queri:[0,1,2,3,4,5],queryutil:5,quick:5,quot:2,quote_al:2,quote_minim:2,quote_non:2,quote_nonnumer:2,quotechar:2,radd:2,rais:[2,3],rand:1,randint:[2,4],random:[0,1,2,6],rang:[0,1,2],rangeindex:2,rapid:[1,4],read:[0,1,2],read_csv:[0,1,2,3],read_feath:2,read_hdf:2,read_json:2,read_orc:[1,2],read_orc_metadata:2,read_parquet:[1,2],read_parquet_metadata:2,reader:1,rec:0,recarrai:2,receiv:2,recent:0,record:2,recordbatch:2,recov:2,reduct:3,ref:2,refer:[4,6],reg:4,regardless:3,regular:2,relat:2,relev:2,remov:[0,2],renam:2,replac:[0,1,2],repo:5,report:3,repres:2,request:2,requir:[2,4,5],resembl:2,reset:2,reset_index:2,reshap:2,resourc:2,respect:2,restor:1,result:[1,2,3,4],retriev:2,reus:3,reusabl:5,revers:[0,1,2],rfloordiv:2,right:[2,3],right_index:[2,3],right_on:2,rmod:2,rmse:6,rmul:2,roll:[2,3],rolling_avg:2,root:[2,4],round:[2,4],row:[0,1,2,3],row_group:2,rpow:2,rsub:2,rsuffix:2,rtruediv:2,run:2,s_version:1,same:[1,2,3],sampl:[0,1],scalar:2,scale:[1,2,3],schedul:4,schema:2,scheme:2,search:[2,6],search_dat:[0,1,2],search_date2:2,searchabl:2,second:[1,2],see:[0,1,2,3],seed:[0,1],seek:2,seg:2,select:[2,3],select_dtyp:2,self:2,send:[0,1],sep:2,separ:2,sequenc:2,ser:2,seri:[3,4,5,6],serial:[2,5],serialis:2,session:4,set:[2,4],set_index:2,set_mask:2,shape:2,shift:2,short1:1,should:[2,6],show:[2,5],shown:2,shuffl:2,side:2,similar:[2,3,5],simliar:5,simpl:[1,2],sin:2,sinc:2,singl:[0,1,2,3,4],site:[1,4],size:[2,4],skip:2,skip_blank_lin:2,skip_row:2,skipfoot:2,skipinitialspac:2,skipna:2,skiprow:[0,2],slice:[0,1,2],slide:2,slight:3,small:3,smaller:2,smallest:2,smooth:1,snappi:2,solut:3,some:[2,5],someth:1,sort:[0,1,2,3],sort_index:2,sort_valu:[0,1,2],sorted_obj:2,sourc:2,space:2,span:2,specif:[0,1,2,4],specifi:[0,1,2],split:[0,1,2,4],spread:[1,3],sql:[0,1,2],sqrt:[2,4],squar:4,squared_error:4,squarederror:4,stabl:2,standard:[1,2,3],star:1,start:[2,4],stat:2,statist:[0,1,2],statu:4,std:[2,3],stdout:4,stop:2,store:2,str:[1,2,4],strict:2,stride:2,string1:1,string:[2,3],strings_to_categor:2,stripe:2,strptime:[0,1,2],strtod:2,structur:2,style:[0,1,2],sub:2,subclass:5,subprocess:4,subset:[2,3],subtract:2,suffic:2,suffix:2,suitabl:2,sum:[0,1,2,3],sum_a:0,sum_agg_col2:0,sum_b:0,sum_c:0,sum_of_squar:2,summari:2,support:[0,1,2,3],tabl:[0,1,2],tail:2,take:[2,4],tan:2,tcp:4,tell:4,temp_parquet:1,tensor:2,term:2,test1:1,test:[1,2,3,4,5],testorcfil:1,text:2,than:[1,2],thei:2,therefor:2,thi:[0,1,2,3,4,5],thing:3,those:2,thousand:2,thread:2,threadidx:2,thrust:2,thu:2,time:[2,3],timedelta:2,timestamp:[0,1,2,3],to_arrai:[0,1,2],to_arrow:[0,1,2],to_csv:[0,1,2],to_dict:2,to_dlpack:2,to_feath:2,to_fram:2,to_gpu_arrai:[0,2],to_gpu_matrix:2,to_hdf:2,to_json:2,to_panda:[0,1,2,3],to_parquet:[1,2],to_record:[0,2],to_replac:2,to_str:2,top:[0,1],total:2,tpb:2,traceback:0,track:3,tracker:3,train:6,transform:2,transpos:2,treat:2,tree_method:4,true_valu:2,truediv:2,tupl:[1,2],two:2,txt:0,typ:2,type:[0,1,2],typeerror:2,udf:2,uint8:2,under:[1,5],underli:[0,1,2],unicod:1,unifi:4,union:2,uniqu:[0,1,2],unique_k:2,unit:2,unix:2,unlik:2,unpivot:2,unsort:3,unspecifi:2,upper:2,upward:2,url:2,usag:2,use:[0,2,3,4,5,6],use_index:2,use_nam:2,usecol:2,used:2,useful:[2,4,5],user:[0,1,2,3,4,5],user_guid:2,userwarn:[1,4],uses:2,using:[0,1,2,4],utf:[1,2],util:[4,5],val:[1,2],valid:2,valid_count:2,vals_a:[0,1,2],vals_b:[0,1,2],valu:[0,1,2,4],value_count:[0,1,2],value_nam:2,value_var:2,valueerror:2,values_to_str:2,var_nam:2,variabl:[0,1,2],varianc:2,variou:2,version:[2,6],via:[0,1,2],visual:3,wait:4,want:1,warn:[1,4],were:[0,1],what:6,when:[2,3,6],where:[0,1,2],whether:2,which:[0,1,2,3,5],whitespac:2,wide:2,wildcard:1,win_siz:2,window:2,wise:[0,1,2,3],within:2,without:2,work:[1,2,4,6],worker:4,workflow:1,wors:2,would:[1,2],wrap:2,write:[0,1,2],written:2,x_test:4,x_train:4,xgboost:6,y_test:4,y_train:4,yet:[0,1,2,3],yield:[0,1],you:[0,1],your:1,ype:1,zero:2,zip:[1,2],zlib:2,zstd:2},titles:["10 Minutes to cuDF","10 Minutes to cuDF and Dask-cuDF","API Reference","Multi-GPU with Dask-cuDF","10 Minutes to Dask-XGBoost","Developer Documentation","Welcome to cuDF\u2019s documentation!"],titleterms:{"boolean":[0,1],"import":4,api:[2,3],append:[0,1],applymap:[0,1],arrow:[0,1],cannot:5,categor:[0,1],cluster:4,code:5,comput:4,concat:[0,1],convert:[0,1],creation:[0,1],csv:[0,1],cudf:[0,1,3,4,6],dask:[1,3,4],dask_xgboost:4,data:[0,1],datafram:2,dataset:4,defin:4,develop:[3,5],disabl:4,document:[5,6],get:[0,1],gotcha:0,gpu:3,gpuarrowread:2,group:[0,1],groupbi:2,histogram:[0,1],how:4,index:[0,1],indic:6,initi:4,input:4,join:[0,1],label:[0,1],libgdf:5,librari:1,merg:0,method:[0,1],metric:4,minut:[0,1,4],miss:[0,1],model:4,modul:4,move:5,multi:3,multiindex:1,navig:3,nccl:4,necessari:4,numpi:[0,1],object:[0,1],onli:4,oper:[0,1],orc:[0,1],organ:5,out:[0,1],p2p:4,panda:[0,1],paramet:4,parquet:[0,1],plot:0,posit:[0,1],predict:4,random:4,refer:2,represent:[0,1],reshap:0,rmse:4,run:4,select:[0,1],seri:[0,1,2],set:0,should:5,stat:[0,1],string:[0,1],tabl:6,time:[0,1],train:4,transpos:1,use:1,version:4,via:4,view:[0,1],welcom:6,what:[1,3],when:1,work:3,xgboost:4}})