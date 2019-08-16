Search.setIndex({docnames:["10min","api","dask-cudf","dask-xgb-10min","developer","index"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,nbsphinx:1,sphinx:56},filenames:["10min.ipynb","api.rst","dask-cudf.md","dask-xgb-10min.ipynb","developer.rst","index.rst"],objects:{"cudf.comm.gpuarrow":{GpuArrowReader:[1,0,1,""]},"cudf.comm.gpuarrow.GpuArrowReader":{to_dict:[1,1,1,""]},"cudf.dataframe":{DataFrame:[1,0,1,""]},"cudf.dataframe.DataFrame":{add_column:[1,1,1,""],apply_chunks:[1,1,1,""],apply_rows:[1,1,1,""],as_gpu_matrix:[1,1,1,""],as_matrix:[1,1,1,""],assign:[1,1,1,""],at:[1,1,1,""],columns:[1,1,1,""],copy:[1,1,1,""],describe:[1,1,1,""],drop:[1,1,1,""],drop_column:[1,1,1,""],drop_duplicates:[1,1,1,""],dropna:[1,1,1,""],dtypes:[1,1,1,""],fillna:[1,1,1,""],from_arrow:[1,1,1,""],from_gpu_matrix:[1,1,1,""],from_pandas:[1,1,1,""],from_records:[1,1,1,""],groupby:[1,1,1,""],hash_columns:[1,1,1,""],head:[1,1,1,""],iat:[1,1,1,""],iloc:[1,1,1,""],index:[1,1,1,""],isna:[1,1,1,""],isnull:[1,1,1,""],iteritems:[1,1,1,""],join:[1,1,1,""],label_encoding:[1,1,1,""],loc:[1,1,1,""],mean:[1,1,1,""],melt:[1,1,1,""],merge:[1,1,1,""],nans_to_nulls:[1,1,1,""],ndim:[1,1,1,""],nlargest:[1,1,1,""],notna:[1,1,1,""],nsmallest:[1,1,1,""],one_hot_encoding:[1,1,1,""],partition_by_hash:[1,1,1,""],pop:[1,1,1,""],quantile:[1,1,1,""],query:[1,1,1,""],reindex:[1,1,1,""],rename:[1,1,1,""],replace:[1,1,1,""],rolling:[1,1,1,""],select_dtypes:[1,1,1,""],set_index:[1,1,1,""],shape:[1,1,1,""],sort_index:[1,1,1,""],sort_values:[1,1,1,""],tail:[1,1,1,""],to_arrow:[1,1,1,""],to_csv:[1,1,1,""],to_dlpack:[1,1,1,""],to_feather:[1,1,1,""],to_gpu_matrix:[1,1,1,""],to_hdf:[1,1,1,""],to_json:[1,1,1,""],to_pandas:[1,1,1,""],to_parquet:[1,1,1,""],to_records:[1,1,1,""],to_string:[1,1,1,""],transpose:[1,1,1,""]},"cudf.dataframe.series":{Series:[1,0,1,""]},"cudf.dataframe.series.Series":{"var":[1,1,1,""],abs:[1,1,1,""],add:[1,1,1,""],all:[1,1,1,""],any:[1,1,1,""],append:[1,1,1,""],applymap:[1,1,1,""],argsort:[1,1,1,""],as_mask:[1,1,1,""],astype:[1,1,1,""],ceil:[1,1,1,""],count:[1,1,1,""],cummax:[1,1,1,""],cummin:[1,1,1,""],cumprod:[1,1,1,""],cumsum:[1,1,1,""],data:[1,1,1,""],describe:[1,1,1,""],diff:[1,1,1,""],digitize:[1,1,1,""],drop_duplicates:[1,1,1,""],dropna:[1,1,1,""],dtype:[1,1,1,""],eq:[1,1,1,""],factorize:[1,1,1,""],fillna:[1,1,1,""],find_first_value:[1,1,1,""],find_last_value:[1,1,1,""],floor:[1,1,1,""],floordiv:[1,1,1,""],from_categorical:[1,1,1,""],from_masked_array:[1,1,1,""],ge:[1,1,1,""],gt:[1,1,1,""],has_null_mask:[1,1,1,""],hash_encode:[1,1,1,""],hash_values:[1,1,1,""],iloc:[1,1,1,""],index:[1,1,1,""],isna:[1,1,1,""],isnull:[1,1,1,""],label_encoding:[1,1,1,""],le:[1,1,1,""],loc:[1,1,1,""],lt:[1,1,1,""],max:[1,1,1,""],mean:[1,1,1,""],min:[1,1,1,""],mod:[1,1,1,""],mul:[1,1,1,""],name:[1,1,1,""],nans_to_nulls:[1,1,1,""],ndim:[1,1,1,""],ne:[1,1,1,""],nlargest:[1,1,1,""],notna:[1,1,1,""],nsmallest:[1,1,1,""],null_count:[1,1,1,""],nullmask:[1,1,1,""],nunique:[1,1,1,""],one_hot_encoding:[1,1,1,""],pow:[1,1,1,""],product:[1,1,1,""],quantile:[1,1,1,""],radd:[1,1,1,""],reindex:[1,1,1,""],rename:[1,1,1,""],replace:[1,1,1,""],reset_index:[1,1,1,""],reverse:[1,1,1,""],rfloordiv:[1,1,1,""],rmod:[1,1,1,""],rmul:[1,1,1,""],rolling:[1,1,1,""],round:[1,1,1,""],rpow:[1,1,1,""],rsub:[1,1,1,""],rtruediv:[1,1,1,""],scale:[1,1,1,""],searchsorted:[1,1,1,""],set_index:[1,1,1,""],set_mask:[1,1,1,""],shape:[1,1,1,""],shift:[1,1,1,""],sort_index:[1,1,1,""],sort_values:[1,1,1,""],std:[1,1,1,""],sub:[1,1,1,""],sum:[1,1,1,""],tail:[1,1,1,""],take:[1,1,1,""],to_array:[1,1,1,""],to_dlpack:[1,1,1,""],to_frame:[1,1,1,""],to_gpu_array:[1,1,1,""],to_hdf:[1,1,1,""],to_json:[1,1,1,""],to_string:[1,1,1,""],truediv:[1,1,1,""],unique:[1,1,1,""],valid_count:[1,1,1,""],value_counts:[1,1,1,""],values_to_string:[1,1,1,""],where:[1,1,1,""]},"cudf.groupby.legacy_groupby.Groupby":{"var":[1,1,1,""],apply:[1,1,1,""],apply_grouped:[1,1,1,""],as_df:[1,1,1,""],std:[1,1,1,""],sum_of_squares:[1,1,1,""]},"cudf.io":{csv:[1,2,0,"-"],feather:[1,2,0,"-"],hdf:[1,2,0,"-"],json:[1,2,0,"-"],orc:[1,2,0,"-"],parquet:[1,2,0,"-"]},"cudf.io.csv":{read_csv:[1,3,1,""],to_csv:[1,3,1,""]},"cudf.io.feather":{read_feather:[1,3,1,""],to_feather:[1,3,1,""]},"cudf.io.hdf":{read_hdf:[1,3,1,""],to_hdf:[1,3,1,""]},"cudf.io.json":{read_json:[1,3,1,""],to_json:[1,3,1,""]},"cudf.io.orc":{read_orc:[1,3,1,""],read_orc_metadata:[1,3,1,""]},"cudf.io.parquet":{read_parquet:[1,3,1,""],read_parquet_metadata:[1,3,1,""],to_parquet:[1,3,1,""]},"cudf.multi":{concat:[1,3,1,""]},"cudf.reshape":{general:[1,2,0,"-"]},"cudf.reshape.general":{get_dummies:[1,3,1,""],melt:[1,3,1,""]},cudf:{multi:[1,2,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","module","Python module"],"3":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:module","3":"py:function"},terms:{"01t09":1,"07t12":1,"08t00":1,"13t12":1,"14t12":1,"15t18":1,"20t00":0,"21t00":0,"22t00":0,"23t00":0,"25th":1,"50th":1,"72706b163a0d4feb949005d22146ad83":0,"75th":1,"boolean":1,"byte":1,"char":1,"class":[1,2],"default":1,"final":3,"float":[0,1],"function":[0,1,3,4],"import":[0,1,5],"int":1,"long":1,"new":[0,1,2,3],"null":[0,1],"return":[0,1,3],"short":0,"throw":1,"true":[0,1,2],"try":1,"var":[0,1],"while":1,And:1,For:[0,1,2],Its:1,Not:1,One:1,The:[1,2,3],These:[1,3,4],Use:[1,2,3],Uses:1,Using:[0,1,3],Will:1,With:[0,1,2],__fspath__:1,__index_level_0__:0,__setitem__:1,_at:1,_path:1,_predic:3,_time:1,aaba:0,abc:1,abl:2,abov:2,abs:1,absolut:1,acceler:0,accept:1,access:[0,1],accessor:[2,3],accommod:1,aco:1,acquir:3,across:[0,2],activ:3,adapt:0,add:1,add_column:1,add_ten:0,added:1,addit:1,addition:[2,3],address:3,advanc:2,advertis:2,after:[0,1],agg:[0,2],agg_col1:0,agg_col2:0,aggreg:[0,2,3,4],ahead:3,algorithm:1,alia:1,all:[0,1,2,3,4],alloc:1,allow:[0,1],along:1,alreadi:[1,2],also:[0,1],alter:1,altern:1,altogeth:1,alwai:1,ame:0,analyz:0,andas_typ:0,ani:[1,2],anoth:[0,1],apach:0,api:[0,3,5],apolog:2,appear:1,append:1,appli:[0,1,4],applic:1,apply_chunk:1,apply_group:1,apply_row:1,applymap:1,applyutil:4,approxim:1,arang:1,arbitrari:1,arg:1,argsort:1,argument:1,arrai:[0,1],array_lik:1,arrow:4,as_df:1,as_gpu_matrix:1,as_index:1,as_mask:1,as_matrix:[0,1],ascend:1,ascii:1,asin:1,assign:[1,2,3],associ:3,assum:1,astyp:[0,1],atan:1,attempt:1,attribut:[0,1],auto:1,automat:[0,1],avail:[0,1,3],averag:1,avg:1,avoid:1,axes:1,axi:[0,1,3],baca:0,back:0,bad:3,balanc:3,base:[0,1],basic:4,batch:1,becaus:[1,2],becom:1,been:2,befor:[1,3],begin:1,behavior:1,behaviour:1,belong:1,below:[0,1],best:0,better:4,between:[1,2,3],big_data:3,big_futur:3,bin:1,binari:1,bird:1,bit:1,bitmask:1,block:1,blockdim:1,blosc:1,blosclz:1,bool:1,boolean1:0,boost:3,booster:3,borrow:0,both:[1,2],bottom:1,bound:1,brotli:1,bst:3,buffer:[1,4],build:[1,3],built:0,builtin:1,burden:3,bye:0,byte1:0,byte_rang:1,bytes1:0,bytesio:1,bz2:1,bzip2:1,caba:0,cache_kei:1,calcul:[0,1],call:[0,1,3],callabl:1,can:[0,1,2,3],cannot:1,cast:1,cat:[0,1],categor:[1,4],categori:[0,1,2],ceil:1,center:1,certain:1,certainli:2,chang:1,chani:0,charact:1,cheatsheet:0,check:1,checksum:1,chunk:1,chunksiz:1,classmethod:1,cleaner:3,client:3,close:1,cluster:[2,5],cmath:1,cmd:3,code:[0,1,5],cohes:2,col_level:1,collaps:1,column:[0,1,2,3,4],column_index:0,column_nam:1,columnar:0,columnop:4,combin:[0,1],comfort:0,comm:1,comma:1,command:3,comment:1,common:1,commun:3,compat:1,compil:1,complevel:1,complex:1,complib:1,compon:1,comprehens:2,compress:1,compressor:1,comput:[0,1,2,5],concat:[1,3],concaten:[0,1,3],concurr:1,cond:1,conda:[0,3],condit:[0,1],configur:1,conflict:1,conform:1,consecut:1,consid:[1,3],constant:1,construct:3,constructor:1,consum:3,contain:[1,3,4],content:[1,5],control:1,convent:1,convers:1,convert:[1,2],convert_ax:1,convert_d:1,coordin:3,copi:1,core:[1,3],correct:1,correpond:1,correspond:1,cos:1,could:1,count:[0,1,2],cpu:[0,2],creat:[0,1,2],criteria:1,criterion:1,csv:1,cuda:[1,3,4],cudapysupport:1,cudautil:4,cudf:[1,4],cudf_compar:0,cudf_df:2,cudf_obj:1,cudf_val:1,cummax:1,cummin:1,cumprod:1,cumsum:1,cumul:1,current:[0,1,2,4],custom:[1,2],dashboard:3,dask:[4,5],dask_cuda:3,dask_cudf:[0,2,3],dask_cudf_compar:0,dask_df:0,dask_gdf:0,data:[1,2,3],data_column:1,databas:1,datafram:[0,2,3,4,5],dataset:[0,1,5],date:[0,1,2],date_ddf:0,date_df:0,date_format:1,date_rang:0,date_unit:1,datelik:1,datetim:[0,1],datetime64:1,dayfirst:1,dayofweek:2,ddf:[0,3],ddf_a:0,ddf_b:0,ddof:1,decent:2,decid:[1,4],decim:1,decod:[1,3],decompress:1,decor:1,deep:1,def:[0,1],default_handl:1,defin:[0,1,4,5],delet:1,delim_whitespac:1,delimit:1,delimt:1,dens:1,depend:1,deprec:1,descend:1,describ:1,descript:0,deseri:1,design:2,desir:1,detect:[1,3],determin:1,dev:1,dev_ari:1,develop:5,deviat:[1,2],devic:1,df2:0,df_a:[0,1],df_b:[0,1],df_group:1,df_merg:1,df_new:1,dgdf:0,dict:1,dictionari:1,diff:1,differ:[1,3],difficult:2,digit:1,dimens:1,dimension:1,direct:[0,1],directli:[0,1,4],directori:[0,1,4],disabl:[1,5],discard:1,discuss:0,disk:1,distribut:[0,3],divis:1,dlpack:1,dmlc:[1,3],doc:1,docstr:4,doctest:1,document:[0,1],docutil:4,doe:1,dog:[0,1],don:[1,2],doubl:1,double1:0,double_precis:1,doublequot:1,downward:1,drop:1,drop_column:1,drop_dupl:1,drop_first:1,dropna:1,ds2:0,dts:1,dtype:[0,1],due:[1,2],dummy_na:1,duplic:1,dure:1,each:[0,1,3],easi:2,edg:1,effect:2,effici:1,either:[0,1],element:[0,1,2],elemenwis:1,els:[0,1],empti:1,emul:1,enabl:[1,3],encapsul:1,encod:[0,1,3],encourag:2,end:1,engin:1,enough:[0,1,2],ensur:[1,3],entir:3,entri:1,enumer:1,env:[0,3],environ:3,epoch:1,equal:1,equival:[0,1],error:[1,3],even:1,everi:1,everyth:1,exact:1,exampl:1,example_fil:0,example_output:0,except:1,exclud:1,execut:1,exist:[0,1],exp:1,expand:1,expect:[1,2],expens:2,explicitli:1,exponenti:1,expr:1,express:1,extens:1,extra:1,extract:1,fa1b17f1666c1:3,factor:1,fals:[0,1],false_valu:1,fast:[0,1,2],faster:[1,4],feather:1,featur:[1,4],field:1,field_nam:0,file:[0,1,4],filenam:1,filepath_or_buff:1,fill:1,fill_valu:1,fillna:[0,1,2],filter:[0,1],find:1,find_first_valu:1,find_last_valu:1,first:[0,1],fish:1,fit:0,five:1,fix:[1,2],flat:4,fletcher32:1,flexibl:[0,1],float1:0,float32:1,float64:1,floor:1,floordiv:1,fly:1,fname:1,follow:[1,2],foo:[0,1],foo_dask:0,forc:1,force_ascii:1,forceindex:1,fork:3,form:[1,2],format:[0,1,2,4],format_byt:3,fortran:1,found:1,frame:1,freq:[0,1],from:[0,1,2,3],from_arrai:1,from_arrow:1,from_batch:1,from_categor:1,from_cudf:0,from_dask_datafram:[0,3],from_gpu_matrix:1,from_masked_arrai:1,from_panda:[0,1,2,3],from_record:1,from_tupl:0,frustrat:2,ftp:1,full:[0,1,2],func:[1,3],futur:[0,1,3],gamma:1,garbag:1,gdf1:0,gdf2:0,gdf:[0,1],gear:0,gener:[1,2,4],generatesmultipl:1,get:1,get_dummi:1,get_renderable_datafram:1,ghi:1,give:1,given:1,global:1,good:[1,3],govern:1,gpu:[0,1,3,4,5],gpu_hist:3,gpuarrow:[1,4],gpuarrowread:5,grade:0,graph:3,greater:1,group:[1,2],group_kei:1,groupbi:[0,2,4,5],grow_polici:3,guarante:1,guid:1,gzip:1,handl:1,handler:1,has:[2,3],has_null_mask:1,hash:1,hash_column:1,hash_encod:1,hash_valu:1,have:[0,1,3],hdf5:1,hdf:1,hdfstore:1,head:[0,1],header:1,helper:4,here:4,hierarch:[0,1],higher:1,hold:1,hood:0,host:[0,1],hostnam:3,hot:1,how:[0,1],html:1,http:[1,3],iat:1,id_var:1,ident:1,identifi:1,ids:1,idx:[0,1],ignor:1,ignore_index:1,iloc:[0,1],implement:[0,1,2,4],improv:1,in1:1,in2:1,in3:1,includ:[0,1],incol:1,inconsist:2,incorrect:1,increas:1,independ:1,index:[1,2,4,5],index_col:1,index_column:0,index_label:1,indic:[1,4],individu:1,ineffici:1,infer:1,inferenc:3,inform:[0,1],ingest:2,initi:[0,1,5],inner:1,inplac:1,input:1,insert:1,insid:1,instanc:[1,3],instanti:3,instead:1,int1:0,int32:1,int64:[0,1],int8:[0,1],integ:[0,1],integr:1,interact:0,intermedi:1,intern:1,interpol:1,interpret:1,intersect:1,interv:1,introduct:0,invalid:1,invok:1,ipaddr:3,is_monoton:1,is_monotonic_decreas:1,is_monotonic_increas:1,is_uniqu:1,isin:1,isna:1,isnul:1,iso8601:1,iso:1,issu:[1,2],item:1,iter:1,iteritem:1,its:[1,3,4],itself:1,jit:[1,4],join:[1,2],json:1,jsonread:1,just:1,keep:[1,3],keep_default_d:1,keep_default_na:1,kei:[0,1],kernel:[1,4],keyword:[0,1],kind:1,kwarg1:1,kwarg2:1,kwarg:1,label:[1,3],label_encod:1,lack:1,lambda:2,larg:[2,3],largest:1,last:1,launch:3,lead:[1,2],least:1,leav:[1,3],left:[0,1,2],left_index:[1,2],left_on:1,len:[0,1,3],length:1,less:1,level:[0,1],leverag:3,lexicograph:1,lgamma:1,lib:[0,3],libcudf:1,libgdf:[1,5],librari:[1,2,5],lies:1,lightweight:3,like:[0,1,2,3],limit:1,line:[1,3],line_termin:1,linear:[1,2],linetermin:1,list:[0,1,2,3],load:[0,1,3],loc:[0,1,2],local:[0,1],local_dict:[0,1],localcudaclust:3,localpath:1,locat:1,log:1,logic:[0,4],logical_and:1,logical_not:1,logical_or:1,long1:0,look:2,loop:1,lossguid:3,lot:4,lower:[0,1],lsuffix:1,lz4:1,lz4hc:1,lzo:1,machin:2,mai:[0,1,3],mainli:0,maintain:[0,1],major:1,make:[0,1,4],mangle_dupe_col:1,mani:[0,2],manipul:0,manner:1,map:[0,1,4],map_partit:[0,2],mapper:1,mark:1,mask:1,match:1,math:1,matrix:1,mauddib:0,max:[0,1,2],max_depth:3,max_leav:3,maximum:1,mean:[0,1,2,3],median:1,melt:1,memori:[0,1,3],mention:2,merg:[0,1,2],met:0,metadat:0,metadata:[0,1],method:[1,2],metric:5,microsecond:1,middl:0,midpoint:1,millisecond:1,min:1,min_period:1,minimum:1,minut:5,mislead:2,miss:1,mix:1,mkdir:0,mod:1,mode:1,model:[0,5],modifi:1,modul:5,modulo:1,monoton:1,more:[0,1],most:[1,2],move:[1,5],mul:1,mult:1,mult_add:1,multi:[1,3,4,5],multiindex:1,multipl:[0,1,2,4],must:[0,1,3],n_gpu:3,na_filt:1,na_posit:1,na_rep:1,na_sentinel:1,na_valu:1,name:[0,1,3],namedtupl:1,nan:1,nan_as_nul:1,nanosecond:1,nans_to_nul:1,navig:5,nccl:5,nccl_p2p_disabl:3,ncol:1,ndarrai:[0,1],ndim:1,nearest:1,necessari:5,need:1,nelem:1,newer:2,nlargest:1,node:3,non:1,none:[0,1,3],nor:1,normal:3,note:[0,1,3],notna:1,now:[0,1],npart:1,npartit:[0,2,3],nrow:1,nsmallest:1,nul:0,null_count:1,nullmask:1,num1:1,num:0,num_boost_round:3,num_round:3,num_row:1,num_row_group:1,numba:[1,4],number:[0,1,3],numer:[1,4],numeric_onli:1,numpi:[1,3],numpy_typ:0,nunber:1,nuniqu:1,obj:1,object:[1,2,3],observ:[0,1],occurr:[0,1],offset:1,often:2,omit:1,onc:[0,1],one:1,one_hot_encod:1,onli:[0,1,2,5],open:1,oper:[1,2,4],oppos:1,opt:3,optim:3,option:[1,3],orc:1,orchestr:2,order:[0,1],ordereddict:0,org:1,organ:5,orient:1,origin:[1,2],other:[1,2,4],otherwis:[0,1],out1:1,out2:1,out:1,out_dtyp:1,outcol:1,outer:1,output:[1,2,3,4],output_fram:1,outsid:1,over:[1,3],overhead:1,overlap:1,overrid:1,overwit:1,ownership:3,p2p:5,packag:[0,2,3],page:5,pair:1,panda:[1,2,3],pandas_t:0,pandas_typ:0,paradigm:0,parallel:[0,1,2],param:3,paramet:[1,5],parquet:[1,2],pars:1,parse_d:1,parser:1,part:1,particular:1,partit:[0,1],partition_by_hash:1,partition_col:1,pass:[0,1,3],path:[0,1],path_or_buf:1,pathlib:1,pd_result:1,pdf:[0,1,3],per:1,percentil:1,perform:[0,1,3,4],period:[0,1],persist:[2,3],pet_cod:1,pet_dummi:1,pet_dummy_0:1,pet_dummy_1:1,pet_dummy_2:1,pet_own:1,pet_typ:1,pipe:3,place:1,pleas:[0,1,3],point:1,pointer:1,pop:1,popen:3,portion:0,posit:1,possibl:[1,4],post:0,postfix:1,pow:1,power:1,practic:0,precis:1,precise_float:1,pred:3,predict:5,prefix:1,prefix_sep:1,preserv:1,preserve_index:1,print:[0,1,3],process:[0,1,3],produc:[0,1,3],product:1,progress:0,project:2,promot:1,proper:1,properti:[0,1],protocol:1,provid:[0,1],ptx:1,purpos:0,put:1,py3:1,pyarrow:[0,1],pycapsul:1,pycapsule_obj:1,pydata:1,pytabl:1,python3:[0,3],python:[0,1,3],quant_index:1,quantil:1,queri:[0,1,2,3,4],queryutil:4,quick:4,quot:1,quote_al:1,quote_minim:1,quote_non:1,quote_nonnumer:1,quotechar:1,radd:1,rais:[1,2],rand:0,randint:[1,3],random:[0,1,5],rang:[0,1],rangeindex:1,rapid:[0,1,3],raw:1,read:[0,1],read_csv:[0,1,2],read_feath:1,read_hdf:1,read_json:1,read_orc:[0,1],read_orc_metadata:1,read_parquet:[0,1],read_parquet_metadata:1,reader:0,recarrai:1,receiv:1,recogn:1,record:1,recordbatch:1,recov:1,reduc:3,reduct:2,ref:1,refer:[3,5],reg:3,regardless:[1,2],reindex:1,relat:1,relev:1,remov:1,renam:1,replac:[0,1],repo:4,report:2,repres:1,request:1,requir:[1,3,4],resembl:1,reset:1,reset_index:1,reshap:1,resourc:1,respect:1,restor:0,result:[0,1,2,3],retriev:1,reus:2,reusabl:4,revers:[0,1],rfloordiv:1,right:[1,2],right_index:[1,2],right_on:1,rmod:1,rmse:5,rmul:1,roll:[1,2],rolling_avg:1,root:[1,3],round:[1,3],row:[0,1,2],row_group:1,rpow:1,rsub:1,rsuffix:1,rtruediv:1,run:1,s_version:0,same:[0,1,2],sampl:0,scalar:1,scale:[0,1,2],scatter:3,schedul:3,schema:1,search:[1,5],search_dat:[0,1],search_date2:1,searchabl:1,searchsort:1,second:[0,1],see:[0,1,2],seed:0,seek:1,seg:1,select:[1,2],select_dtyp:1,self:1,send:0,sep:1,separ:1,seper:1,sequenc:1,ser:1,seri:[2,3,4,5],serial:[1,4],serialis:1,session:3,set:[1,3],set_index:1,set_mask:1,shape:1,shift:1,short1:0,shorthand:1,should:[1,5],show:4,shuffl:1,side:1,similar:[1,2,4],simliar:4,simpl:[0,1],sin:1,sinc:1,singl:[0,1,2,3],site:[0,3],size:[1,3],skip:1,skip_blank_lin:1,skip_row:1,skipfoot:1,skipinitialspac:1,skipna:1,skiprow:1,slice:[0,1],slide:1,slight:2,small:2,smaller:1,smallest:1,smooth:0,snappi:1,solut:2,some:[1,4],some_func:1,someth:0,sort:[0,1,2],sort_index:1,sort_valu:[0,1],sorted_obj:1,sourc:1,space:1,span:1,spars:1,specif:[0,1,3],specifi:[0,1],speed:1,split:[0,1,3],spread:[0,2],sql:[0,1],sqrt:[1,3],squar:3,squared_error:3,squarederror:3,stabl:1,standard:[0,1,2],star:0,start:[1,3],stat:1,statist:[0,1],statu:3,std:[1,2],stdout:3,stop:1,store:1,str:[0,1,3],strict:1,stride:1,string1:0,string:[1,2],stringio:1,strings_to_categor:1,stripe:1,strptime:[0,1],strtod:1,structur:1,style:[0,1],sub:1,subclass:4,submit:3,subprocess:3,subset:[1,2],subtract:1,suffic:1,suffix:1,suitabl:1,sum:[0,1,2],sum_of_squar:1,summari:1,suppli:1,support:[0,1,2],tabl:[0,1],tail:1,take:[1,3],tan:1,task:3,tcp:3,tell:3,temp_parquet:0,tensor:1,term:1,test1:0,test:[0,1,2,3,4],testorcfil:0,text:1,than:[0,1],thei:1,them:1,therefor:1,thi:[0,1,2,3,4],thing:2,those:1,thousand:1,thread:1,threadidx:1,thresh:1,thrust:1,thu:1,time:[1,2,3],timedelta:1,timestamp:[0,1,2],to_arrai:[0,1],to_arrow:[0,1],to_csv:[0,1],to_dict:1,to_dlpack:1,to_feath:1,to_fram:1,to_gpu_arrai:1,to_gpu_matrix:1,to_hdf:1,to_json:1,to_panda:[0,1,2],to_parquet:[0,1],to_record:1,to_replac:1,to_str:1,top:0,total:1,tpb:1,track:2,tracker:2,train:5,transform:1,transpar:1,transpos:1,treat:1,tree_method:3,true_valu:1,truediv:1,tupl:[0,1],two:1,typ:1,type:[0,1],typeerror:1,udf:1,uint8:1,under:[0,4],underli:[0,1],unicod:0,unifi:3,union:1,uniqu:[0,1],unique_k:1,unit:1,unix:1,unpivot:1,unsort:2,unspecifi:1,unusu:1,upper:1,upward:1,url:1,usag:1,use:[1,2,3,4,5],use_index:1,use_nam:1,usecol:1,used:1,useful:[1,3,4],user:[0,1,2,3,4],user_guid:1,userwarn:[0,3],uses:1,using:[0,1,3],utf:[0,1],util:[3,4],val:[0,1],valid:1,valid_count:1,vals_a:[0,1],vals_b:[0,1],valu:[0,1,3],value_count:[0,1],value_nam:1,value_var:1,valueerror:1,values_to_str:1,var_nam:1,variabl:[0,1],varianc:1,variou:1,version:[1,5],via:[0,1],visual:2,wait:3,want:0,warn:0,were:0,what:5,when:[1,2,5],where:[0,1],whether:1,which:[0,1,2,4],whitespac:1,whose:1,wide:1,wildcard:0,win_siz:1,win_typ:1,window:1,wise:[0,1,2],within:1,without:1,work:[0,1,3,5],worker:3,workflow:0,wors:1,would:[0,1],write:[0,1],written:1,x_test:3,x_train:3,xgboost:5,y_test:3,y_train:3,yet:[0,1,2],yield:0,you:0,your:0,ype:0,zero:1,zip:[0,1],zlib:1,zstd:1},titles:["10 Minutes to cuDF and Dask-cuDF","API Reference","Multi-GPU with Dask-cuDF","10 Minutes to Dask-XGBoost","Developer Documentation","Welcome to cuDF\u2019s documentation!"],titleterms:{"boolean":0,"import":3,api:[1,2],append:0,applymap:0,arrow:0,cannot:4,categor:0,cluster:3,code:4,comput:3,concat:0,convert:0,creation:0,csv:0,cudf:[0,2,3,5],dask:[0,2,3],dask_xgboost:3,data:0,datafram:1,dataset:3,defin:3,develop:[2,4],disabl:3,document:[4,5],get:0,gpu:2,gpuarrowread:1,group:0,groupbi:1,histogram:0,how:3,index:0,indic:5,initi:3,input:3,join:0,label:0,libgdf:4,librari:0,method:0,metric:3,minut:[0,3],miss:0,model:3,modul:3,move:4,multi:2,multiindex:0,navig:2,nccl:3,necessari:3,numpi:0,object:0,onli:3,oper:0,orc:0,organ:4,out:0,p2p:3,panda:0,paramet:3,parquet:0,posit:0,predict:3,random:3,refer:1,represent:0,rmse:3,run:3,select:0,seri:[0,1],should:4,stat:0,string:0,tabl:5,time:0,train:3,transpos:0,use:0,version:3,via:3,view:0,welcom:5,what:[0,2],when:0,work:2,xgboost:3}})